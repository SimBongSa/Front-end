import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
	__getComment,
	__postComment,
	__putComment,
	__deleteComment,
} from "../../../redux/modules/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import {
	MainComponent,
	CommentWriteWrap,
	CommentTitleWrap,
	CommentBtnWrap,
	Box,
	CommentInput,
	Div,
	Date,
	CommentDiv,
	UserIcon,
	StImgBox,
} from "./Comment.styled";
import { __getUserInfo } from "../../../redux/modules/mypageSlice";
import { __getCompanyInfo } from "../../../redux/modules/mypageSlice";
import Stbtn from "../../common/button/Button";
import Input from "../../common/input/Input";
import Profileimg from "../../common/profileimg/Profileimg";
import { __getOtherUserEnroll, __getOtherUserInfo } from "../../../redux/modules/mypageSlice";

function Comment() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const [cookies] = useCookies(["Authorization"]);
	const userName = cookies["username"];
	const authority = cookies["authority"];

	const commentTotalList = useSelector(state => state.comment.commentTotalList);
	const commentList = useSelector(state => state.comment.commentList);
	const otherUserInfo = useSelector(state => state.mypage.otherUserInfo);

	const [editCommentId, setEditCommentId] = useState([]);
	const [content, setContent] = useState();
	const [comment, setComment] = useState({ comment: content });

	const userInfo = useSelector(state => state.mypage?.userInfo);
	const companyInfo = useSelector(state => state.mypage?.companyInfo);

	useEffect(() => {
		dispatch(__getComment(id));
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(__getUserInfo(id));
	}, [dispatch]);

	useEffect(() => {
		dispatch(__getCompanyInfo(id));
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(__getTotalComment(id));
	// }, [dispatch, id]);
	// console.log(commentTotalList);

	const onChangeHalder = useCallback(e => {
		setContent(e.target.value);
	}, []);

	return (
		<MainComponent>
			<StImgBox>
				<Profileimg
					src={process.env.PUBLIC_URL + "/image/64defaultimg.png"}
					variant={"profile-company"}
				/>
			</StImgBox>
			<CommentWriteWrap>
				<Input
					type="text"
					placeholder="댓글을 남겨주세요!"
					value={content}
					onChange={onChangeHalder}
				/>
				<Stbtn
					variant="comment"
					onClick={() => {
						if (content !== "") {
							dispatch(__postComment({ content, id }));
							setContent("");
						}
					}}
				>
					댓글쓰기
				</Stbtn>
			</CommentWriteWrap>

			{commentList && commentList.length > 0
				? commentList.map((item, index) => {
						const commentId = item.commentId;
						let isEditState = editCommentId.indexOf(commentId) === -1 ? false : true;
						return (
							<Box key={index}>
								<CommentTitleWrap>
									<div>
										{authority === "ROLE_ADMIN" ? (
											// (ROLE_ADMIN) 프로필의 이미지가 존재할 때
											companyInfo && companyInfo?.profileImage ? (
												<Profileimg
													variant="profile-company"
													src={companyInfo?.profileImage}
													alt="user"
													onClick={() => {
														dispatch(__getOtherUserInfo(item.memberId));
														// dispatch(__getOtherUserEnroll(item.memberId))
														navigate(`/usermypage/${item.memberId}`, { state: otherUserInfo });
													}}
												/>
											) : (
												<Profileimg
													src={process.env.PUBLIC_URL + "/image/32defaultimg.png"}
													alt="user"
													onClick={() => {
														dispatch(__getOtherUserInfo(item.memberId));
														// dispatch(__getOtherUserEnroll(item.memberId))
														navigate(`/usermypage/${item.memberId}`, { state: otherUserInfo });
													}}
												/>
											)
										) : // (ROLE_MEMBER) 프로필의 이미지가 존재할 때
										userInfo && userInfo.profileImage ? (
											<Profileimg
												variant="profile-user"
												src={userInfo?.profileImage}
												alt="user"
												onClick={() => {
													dispatch(__getOtherUserInfo(item.memberId));
													// dispatch(__getOtherUserEnroll(item.memberId))
													navigate(`/usermypage/${item.memberId}`, { state: otherUserInfo });
												}}
											/>
										) : (
											<Profileimg
												src={process.env.PUBLIC_URL + "/image/32defaultimg.png"}
												alt="user"
												onClick={() => {
													dispatch(__getOtherUserInfo(item.memberId));
													// dispatch(__getOtherUserEnroll(item.memberId))
													navigate(`/usermypage/${item.memberId}`, { state: otherUserInfo });
												}}
											/>
										)}
										<div>
											<h2>{item?.username}</h2>
											<Date>{item.createdAt.split("T")[0].substring(0, 10)}</Date>
										</div>
									</div>
									<CommentBtnWrap>
										{userName === item.username ? (
											<>
												{!isEditState ? (
													<Div
														onClick={() => {
															if (editCommentId.indexOf(commentId) === -1)
																setEditCommentId(prev => [...prev, commentId]);
														}}
													>
														수정 |
													</Div>
												) : (
													<Div
														onClick={() => {
															if (editCommentId.indexOf(commentId) !== -1) {
																setEditCommentId(editCommentId.filter(el => el !== commentId));
																dispatch(__putComment({ commentId, content: comment }));
															}
														}}
													>
														완료 |
													</Div>
												)}
												<Div
													onClick={() => {
														dispatch(__deleteComment(commentId));
													}}
												>
													삭제
												</Div>
											</>
										) : (
											<>
												<Div>신고</Div>
											</>
										)}
									</CommentBtnWrap>
								</CommentTitleWrap>
								{isEditState ? (
									<>
										<CommentInput
											type="text"
											defaultValue={item.content}
											value={comment.content?.content}
											onChange={e => {
												setComment(e.target.value);
											}}
										/>
									</>
								) : (
									<CommentDiv>{item.content}</CommentDiv>
								)}
							</Box>
						);
				  })
				: ""}
		</MainComponent>
	);
}

export default Comment;

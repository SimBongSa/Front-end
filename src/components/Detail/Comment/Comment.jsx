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
	UserIcon,
	CommentInput,
	Div,
	Date,
	CommentDiv,
	CommentIcon,
} from "./Comment.styled";
import Stbtn from "../../common/button/Button";
import Input from "../../common/input/Input";
import { __getOtherUserInfo } from "../../../redux/modules/mypageSlice";

function Comment() {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const [cookies] = useCookies(["Authorization"]);
	const userName = cookies["username"];

	const commentTotalList = useSelector((state) => state.comment.commentTotalList);
	const commentList = useSelector((state) => state.comment.commentList);
	const otherUserInfo = useSelector((state) => state.mypage.otherUserInfo);
	console.log(otherUserInfo)

	const [editCommentId, setEditCommentId] = useState([]);
	const [content, setContent] = useState();
	const [comment, setComment] = useState({ comment: content });

	const [page, setPage] = useState(1);
	const size = 4;

	useEffect(() => {
		dispatch(__getComment(id));
	}, [dispatch, id]);

	// useEffect(() => {
	// 	dispatch(__getTotalComment(id));
	// }, [dispatch, id]);
	// console.log(commentTotalList);

	const onChangeHalder = useCallback(
		e => {
			setContent(e.target.value);
		},
		[content]
	);

	return (
		<MainComponent>
			<UserIcon />
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
										<CommentIcon 
											onClick={() => {
												dispatch(__getOtherUserInfo(item.memberId))
												// dispatch(__getOtherUserEnroll(item.memberId))
												navigate(`/usermypage/${item.memberId}`, {state: otherUserInfo})
											}}
										/>
										<div>
											<h2>{item?.username}</h2>
											<Date>{item.createdAt.split("T")[0].substring(0,10)}</Date>
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
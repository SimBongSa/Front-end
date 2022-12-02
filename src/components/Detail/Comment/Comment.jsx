import Input from "../../../components/common/input/Input";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
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
	Button,
	UserIcon,
	CommentInput,
	Div,
	Date,
	CommentDiv,
	CommentIcon,
	StPageBtn,
} from "./Comment.styled";

function Comment() {
	const [cookies] = useCookies(["Authorization"]);
	const userName = cookies["username"];

	const commentList = useSelector(state => state.comment.commentList);
	const dispatch = useDispatch();

	const { id } = useParams();

	const [editCommentId, setEditCommentId] = useState([]);
	const [content, setContent] = useState();
	const [comment, setComment] = useState({ comment: content });

	const [page, setPage] = useState(1);
	const size = 4;
	console.log(page, size);
	useEffect(() => {
		dispatch(__getComment({ id, page, size }));
	}, [dispatch, id, page, size]);

	const onChangeHalder = useCallback(
		e => {
			setContent(e.target.value);
		},
		[content]
	);

	useEffect(() => {
		console.log("렌더링");
	}, [content]);
	console.log(content);
	return (
		<MainComponent>
			<CommentWriteWrap>
				<UserIcon />
				<Input
					type="text"
					placeholder="댓글을 남겨주세요!"
					value={content}
					onChange={onChangeHalder}
				/>
				<Button
					onClick={() => {
						// console.log("---------------------- 댓글작성 ---------------------");
						// console.log(cookies);
						if (content !== "") {
							dispatch(__postComment({ content, id }));
							setContent("");
						}
					}}
				>
					댓글쓰기
				</Button>
			</CommentWriteWrap>
			{commentList && commentList.length > 0
				? commentList.map((item, index) => {
						const commentId = item.commentId;
						let isEditState = editCommentId.indexOf(commentId) === -1 ? false : true;
						return (
							<Box key={index}>
								<CommentTitleWrap>
									<div>
										<CommentIcon />
										<div>
											<h2>{item?.username}</h2>
											<Date>{item.createdAt.split("T")[0]}</Date>
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
			<StPageBtn
				onClick={() => {
					setPage(prev => prev + 1);
					dispatch(__getComment({ id, page, size }));
				}}
			>
				댓글 더보기
			</StPageBtn>
		</MainComponent>
	);
}

export default Comment;
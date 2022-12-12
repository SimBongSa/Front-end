import { DetailSide, DetailSideItem, StDateBox, StBtnBox } from "../DetailSide/DetailSide.styled";
import { useEffect, useState } from "react";

import { __postApply, __getBoard, __delBoard } from "../../../redux/modules/boardSlice";

import { getCookieToken } from "../../../utils/cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __createChatRoom } from "../../../redux/modules/chatSlice";
import Stbtn from "../../common/button/Button";
import { toast, ToastContainer } from "react-toastify";

const DetailSlideBar = ({ boardsId, username, id }) => {

	const [applied, setApplied] = useState("");
	const authority = getCookieToken(["username"]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const applicants = useSelector(state => state?.boards?.board?.applicants);
	const chatList = useSelector((state) => state?.chat?.chatList);
	const newChatRoom = useSelector((state) => state.chat?.chatRoom);


	const findMyChatRoom = (chatList) => {
		if (chatList.roomName === boardsId?.title) {
			return true;
		} else {
			return false;
		}
	};

	const chatRoom = chatList?.filter(findMyChatRoom);

	const createChatRoom = (chatRoomInfo) => {

		dispatch(__createChatRoom(chatRoomInfo));
	};

	useEffect(() => {
		if (applicants?.includes(authority) === true) {
			setApplied("봉사활동 취소하기");
		} else {

			setApplied("이 봉사활동에 참여하기!");
		}
	}, [applicants, authority, setApplied]);

	return (
		<DetailSide>
			<ToastContainer />

			<h1>봉사활동 모집기간</h1>
			<StDateBox>
				<div>{boardsId?.startDate}</div> ━ <div>{boardsId?.endDate}</div>
			</StDateBox>
			<DetailSideItem>
				<div>시간 : {boardsId?.dueDay?.split(" ")[1].substring(0, 5)}</div>

				<div>봉사 신청 인원 : {boardsId.applicantCnt}명</div>

			</DetailSideItem>
			<StBtnBox>
				<Stbtn
					variant="boards-apply"
					onClick={() => {
						dispatch(__postApply(id));

						dispatch(__getBoard(id));
						setTimeout(() => {
							navigate("/boards");
						}, 1000);

					}}
				>
					{applied}
				</Stbtn>

				{
					chatRoom?.length > 0 ? (
						<Stbtn
							variant="boards-chat"
							onClick={() => {
								toast.success(boardsId.author + '님 과의 채팅방으로 이동합니다.')
								setTimeout(() => {
									navigate(`/chat/${chatRoom[0].chatRoomId}`);
								}, 1000)
							}}
						>
							봉사단체 연락하기
						</Stbtn>
					) : (
						<Stbtn
							variant="boards-chat"
							onClick={() => {
								createChatRoom({
									userIdList: boardsId.authorId,
									userNameList: boardsId.author,
									roomName: boardsId.title,
									boardId: boardsId.boardId,
								});
								toast.success(boardsId.author + '님 과의 채팅방으로 이동합니다.')
								setTimeout(() => {
									navigate(`/chat/${newChatRoom}`);
								}, 1000)
							}}
						>
							봉사단체 연락하기
						</Stbtn>
					)
				}
			
			</StBtnBox>
			{boardsId.author === username ? (
				<StBtnBox>
					<Stbtn
						variant="boards-edit"
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
					>
						수정하기
					</Stbtn>
					<Stbtn
						variant="boards-delete"
						onClick={() => {
							dispatch(__delBoard(id));

							toast.success("게시물이 삭제되었습니다.")
							setTimeout(() => {
								navigate('/')
							}, 1000)

						}}
					>
						삭제하기
					</Stbtn>
				</StBtnBox>
			) : null}
		</DetailSide>
	);
};
export default DetailSlideBar;

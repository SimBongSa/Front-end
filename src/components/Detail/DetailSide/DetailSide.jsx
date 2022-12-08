import {
	DetailSide,
	DetailSideItem,
	StDateBox,
	StApplyBtn,
	StBtnBox,
	StChatBtn,
} from "../DetailSide/DetailSide.styled";
import { useEffect, useState } from "react";
import { __postApply } from "../../../redux/modules/boardSlice";
import { __delBoard } from "../../../redux/modules/boardSlice";
import { getCookieToken } from "../../../utils/cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __createChatRoom } from "../../../redux/modules/chatSlice";
import Stbtn from "../../common/button/Button";

function DetailSlideBar({ boardsId, username, id }) {
	const [applied, setApplied] = useState("");
	const authority = getCookieToken(["username"]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const applicants = useSelector(state => state?.boards?.board?.applicants);
	const chatRoom = useSelector(state => state.chat.chatRoom);
	// const boardId = useSelector(state => state?.boards.board.boardId);

	const createChatRoom = chatRoomInfo => {
		dispatch(__createChatRoom(chatRoomInfo));
		navigate(`/chat/${chatRoom}`);
	};

	console.log("applicants =>", applicants);
	console.log("authority =>", authority);
	// console.log(applicants.includes(authority));

	// if (applicants.includes(authority) > 0 && applicants.includes(authority) === true) {
	// 	setApplied("봉사활동 취소하기");
	// } else {
	// 	setApplied("봉사자 신청하기");
	// }
	useEffect(() => {
		if (applicants?.includes(authority) === true) {
			setApplied("봉사활동 취소하기");
		} else {
			setApplied("봉사자 신청하기");
		}
	}, [setApplied]);

	console.log("applied =>", applied);
	return (

		<DetailSide>
			<h1>봉사활동 모집기간</h1>
			<StDateBox>
				<div>{boardsId?.startDate}</div> ━ <div>{boardsId?.endDate}</div>
			</StDateBox>
			<DetailSideItem>
				<div>시간 : {boardsId.dueDay.split(' ')[1].substring(0,5)}</div>
				<div>반복 여부 : ?</div>
				<div>봉사 인원 : Volunteers: {boardsId.applicantCnt}명</div>
			</DetailSideItem>
			<StBtnBox>
				<Stbtn
					variant="boards-apply"
					onClick={() => {
						dispatch(__postApply(id));
					}}
				>
					봉사자 신청하기
				</Stbtn>
				<Stbtn
					variant="boards-chat"
					onClick={() => {
						createChatRoom({
							userIdList: boardsId.authorId,
							userNameList: boardsId.author,
							roomName: boardsId.title,
							boardId: boardsId.boardId,
						});
					}}
				>
					봉사 단체 연락하기
				</Stbtn>
			</StBtnBox>
			{boardsId.author === username ? (

				<StBtnBox>
					<Stbtn
						variant="boards-edit"
						onClick={() => {
							navigate(`/edit/${id}`);
						}}
					>

						{applied}

					</Stbtn>
					<Stbtn
						variant="boards-delete"
						onClick={() => {
							dispatch(__delBoard(id));
							navigate("/boards");
						}}
					>
						삭제하기
					</Stbtn>
				</StBtnBox>
			) : null}
		</DetailSide>
	);
}

export default DetailSlideBar;

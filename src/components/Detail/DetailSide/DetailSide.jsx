import {
	DetailSide,
	DetailSideItem,
	StDateBox,
	StApplyBtn,
	StBtnBox,
	StChatBtn,
} from "../DetailSide/DetailSide.styled";
import { __postApply } from "../../../redux/modules/boardSlice";
import { __delBoard } from "../../../redux/modules/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __createChatRoom } from "../../../redux/modules/chatSlice";

function DetailSlideBar({ boardsId, username, id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	console.log(boardsId.authorId)

	const chatRoom = useSelector((state) => state.chat.chatRoom)
	console.log(chatRoom)

	const createChatRoom = (chatRoomInfo) => {
		dispatch(__createChatRoom(chatRoomInfo));
		navigate(`/chat/${chatRoom}`)
	}

	return (
		<>
			<DetailSide>
				<StDateBox>
					<div>{boardsId?.startDate}</div> ━ <div>{boardsId?.endDate}</div>
				</StDateBox>
				<DetailSideItem>
					<div>시간 : ?</div>
					<div>반복 여부 : ?</div>
					<div>봉사 인원 : Volunteers: {boardsId.applicantCnt}명</div>
				</DetailSideItem>
				<StBtnBox>
					<StApplyBtn
						onClick={() => {
							dispatch(__postApply(id));
						}}
					>
						봉사자 신청하기
					</StApplyBtn>
					<StChatBtn
						onClick={() => {
							createChatRoom({
								"userIdList": boardsId.authorId,
								"userNameList": boardsId.author,
								"roomName": boardsId.title
							});
						}}
					>봉사 단체 연락하기</StChatBtn>
				</StBtnBox>
				{boardsId === username ? (
					<StBtnBox>
						<StApplyBtn
							onClick={() => {
								navigate(`/edit/${id}`);
							}}
						>
							수정하기
						</StApplyBtn>
						<StChatBtn
							onClick={() => {
								dispatch(__delBoard(id));
								navigate("/boards");
							}}
						>
							삭제하기
						</StChatBtn>
					</StBtnBox>
				) : null}
			</DetailSide>
		</>
	);
}

export default DetailSlideBar;

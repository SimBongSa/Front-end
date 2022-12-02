import {
	DetailSide,
	DetailNavBtn,
	DetailSideItem,
	StDateBox,
	StApplyBtn,
	StBtnBox,
	StChatBtn,
} from "../DetailSlide/DetailSlideBar.styled";
import { __postApply } from "../../../redux/modules/boardSlice";
import { __delBoard } from "../../../redux/modules/boardSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DetailSlideBar({ boardsId, username, id }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
					<StChatBtn>봉사 단체 연락하기</StChatBtn>
				</StBtnBox>
				{boardsId === username ? (
					<>
						<DetailNavBtn
							onClick={() => {
								navigate(`/edit/${id}`);
							}}
						>
							수정하기
						</DetailNavBtn>
						<DetailNavBtn
							onClick={() => {
								dispatch(__delBoard(id));
								navigate("/boards");
							}}
						>
							삭제하기
						</DetailNavBtn>
					</>
				) : null}
			</DetailSide>
		</>
	);
}

export default DetailSlideBar;

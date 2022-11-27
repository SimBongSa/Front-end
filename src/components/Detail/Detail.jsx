import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __postApply } from "../../redux/modules/boardSlice";
import { __delBoard, __getBoardId } from "../../redux/modules/boardSlice";
import { useParams } from "react-router-dom";
import {
	DetailContainer,
	DetailContent,
	MapWrapper,
	DetailSide,
	DetailNavBtn,
} from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";
import Comment from "../Comment/Comment";
import Tags from "../Recruit/Tags/Tags";
import { getCookieToken } from "../../utils/cookie";
import styled from "styled-components";
import { ProfileBox } from "../MyPage/Profile/Profile.styled";

const Detail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const boardsId = useSelector(state => state?.boards?.board);
	const { id } = useParams();

	const username = getCookieToken(["username"]);
	// console.log(username)

	useEffect(() => {
		dispatch(__getBoardId(id));
	}, [dispatch, id]);

	// console.log("Detail.jsx boardsId =>", boardsId);

	return (
		<>
			<MainBg image={boardsId?.boardImage} />
			<DetailContainer>
				<DetailContent>
					<h1>{boardsId?.title}</h1>
					<hr />
					<h3>봉사 활동 내용</h3>
					<span>{boardsId?.content}</span>
					<hr />
					<h3>봉사 요청 사항</h3>
					{boardsId?.tags?.map(item => {
						return <DetailTag>{item}</DetailTag>;
					})}
					<hr />
					<MapWrapper>
						<KaMap input="false" area={boardsId?.area} mapWidth="100%" mapHeight="400px" />
					</MapWrapper>
					<Comment />
				</DetailContent>
				<DetailSide>
					<h2>
						모집 기간 : {boardsId?.startDate} ~ {boardsId?.endDate}
					</h2>
					{boardsId.profileImage ? (
						<img src={boardsId.profileImage} alt="profileImage" />
					) : (
						<img
							src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw"
							alt="user"
						/>
					)}
					<DetailSideItem>등록기관 : {boardsId.author}</DetailSideItem>
					<DetailNavBtn
						onClick={() => {
							dispatch(__postApply(id));
						}}
					>
						봉사 신청하기
					</DetailNavBtn>
					<DetailNavBtn>봉사 단체 연락하기</DetailNavBtn>
					<DetailSideItem>신청 인원 : {boardsId.applicantCnt}명</DetailSideItem>
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
			</DetailContainer>
		</>
	);
};

export default Detail;

export const DetailSideItem = styled.div`
	margin: 1rem;
	margin-top: 1rem;
	text-align: center;
`;

export const DetailTag = styled.div`
	font-size: 1rem;
	background: gray;
	margin: 1rem;
	padding: 0.5rem;
	width: fit-content;
`;

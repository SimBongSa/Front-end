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
	StDetailTag,
	StTitleBox,
	StAreaBox,
	StArea,
	StImgWrapper,
	StContentBox,
} from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";
import Comment from "../Comment/Comment";
import { getCookieToken } from "../../utils/cookie";
import styled from "styled-components";

const Detail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const boardsId = useSelector(state => state?.boards?.board);
	const { id } = useParams();

	const username = getCookieToken(["username"]);
	// console.log(username)
	console.log(boardsId);

	useEffect(() => {
		dispatch(__getBoardId(id));
	}, [dispatch, id]);

	const getDateDiff = (d1, d2) => {
		const dueDay = new Date(d1);
		const today = new Date(d2);
		const diffDate = dueDay.getTime() - today.getTime();
		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
	};

	const today = new Date().toISOString().split("T")[0];
	const dDay = getDateDiff(boardsId.dueDay, today);
	return (
		<>
			<MainBg image={boardsId?.boardImage} />
			<DetailContainer>
				<DetailContent>
					<StTitleBox>
						<h1>{boardsId?.title}</h1>
						<div>D-{dDay}</div>
						<StImgWrapper>
							{boardsId.profileImage ? (
								<img src={boardsId.profileImage} alt="profileImage" />
							) : (
								<img
									src="https://play-lh.googleusercontent.com/38AGKCqmbjZ9OuWx4YjssAz3Y0DTWbiM5HB0ove1pNBq_o9mtWfGszjZNxZdwt_vgHo=w240-h480-rw"
									alt="user"
								/>
							)}
						</StImgWrapper>
					</StTitleBox>
					<StAreaBox>
						<StArea>{boardsId.area}</StArea>
						<div>{boardsId.detailArea}</div>
					</StAreaBox>
					<hr />
					<h3>봉사 활동 내용</h3>
					<StContentBox>{boardsId?.content}</StContentBox>
					<hr />
					<h3>봉사 요청 사항</h3>
					<StDetailTag>
						{boardsId.tags && boardsId.tags.length > 0 ? (
							boardsId.tags.map(item => {
								return <div>#{item}</div>;
							})
						) : (
							<h2>요청 사항이 없습니다</h2>
						)}
					</StDetailTag>
					<hr />
					<MapWrapper>
						<KaMap input="false" area={boardsId?.area} mapWidth="100%" mapHeight="400px" />
					</MapWrapper>
					<hr />
					<Comment />
				</DetailContent>
				<DetailSide>
					<h2>
						모집 기간 : {boardsId?.startDate} ~ {boardsId?.endDate}
					</h2>

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

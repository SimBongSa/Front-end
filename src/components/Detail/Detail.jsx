import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getBoardId } from "../../redux/modules/boardSlice";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";
import Comment from "../Detail/Comment/Comment";
import DetailSlide from "./DetailSide/DetailSide";
import { getCookieToken } from "../../utils/cookie";
import {
	DetailContainer,
	DetailContent,
	MapWrapper,
	StDetailTag,
	StTitleBox,
	StAreaBox,
	StArea,
	StImgWrapper,
	StContentBox,
	StDetailArea,
} from "./Detail.styled";
import { __getChatList } from "../../redux/modules/chatSlice";
import styled from "styled-components";

const Detail = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const boardsId = useSelector(state => state?.boards?.board);
	const { id } = useParams();

	const username = getCookieToken(["username"]);

	useEffect(() => {
		dispatch(__getBoardId(id));
		dispatch(__getChatList());
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
								<img
									src={boardsId.profileImage}
									alt="profileImage"
									onClick={() => {
										navigate(`/companypage/${boardsId?.authorId}`);
									}}
								/>
							) : (
								<img src={process.env.PUBLIC_URL + "/image/32defaultimg.png"} alt="user" />
							)}
						</StImgWrapper>
					</StTitleBox>
					<StAreaBox>
						<StArea>{boardsId.area}</StArea>
						<StDetailArea>{boardsId.detailArea}</StDetailArea>
					</StAreaBox>
					<h3>?????? ?????? ??????</h3>
					<StContentBox>{boardsId?.content}</StContentBox>
					<h3>?????? ????????? ?????????</h3>
					<StDetailTag>
						{boardsId.tags && boardsId.tags.length > 0 ? (
							boardsId.tags.map((item, idx) => {
								return <div key={idx}>#{item}</div>;
							})
						) : (
							<h2>?????? ????????? ????????????</h2>
						)}
					</StDetailTag>
					<MapWrapper>
						<KaMap input="false" area={boardsId?.area} mapWidth="100%" mapHeight="400px" />
					</MapWrapper>
					<Comment />
				</DetailContent>
				<DetailSlide boardsId={boardsId} username={username} id={id} />
			</DetailContainer>
		</>
	);
};

export default Detail;

export const StDivider = styled.div`
	display: flex;
	margin: 0 auto;
	margin-top: 5rem;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 0.5px;
	background: ${props => props.theme.subTextColor};
`;

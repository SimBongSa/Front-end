import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../../redux/modules/boardSlice";
import {
	StCard,
	StCardInfo,
	StContent,
	StImgWrapper,
	StDate,
	StArea,
	StTagBox,
} from "../cards/CardGrid.styled";
import { CarouselContainer, SlideTrack, Slide, StDetailArea } from "./Carousel.styled";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [size, setSize] = useState(10);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(__getBoard({ page, size }));
	}, [dispatch, page, size]);

	const boardList = useSelector(state => state.boards?.boards);

	const getDateDiff = (d1, d2) => {
		const dueDay = new Date(d1);
		const today = new Date(d2);
		const diffDate = dueDay.getTime() - today.getTime();
		return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
	};
	const today = new Date().toISOString().split("T")[0];

	return (
		<>
			<CarouselContainer>
				<h1>모집 종료 예정인 봉사활동</h1>
				<SlideTrack>
					{boardList.map((item, idx) => {
						const dDay = getDateDiff(item.dueDay, today);
						return (
							<Slide key={item.boardId}>
								<StCard									
									variant="Board"
									onClick={() => {
										navigate(`/boards/${item.boardId}`);
									}}
								>
									<StDate variant="Board">D-{dDay}</StDate>
									<StImgWrapper variant="Board">
										<img src={item.boardImage} loading="lazy" alt="thumbnail" />
									</StImgWrapper>
									<StContent variant="Board">
										<p className="title">{item.title}</p>
										<StCardInfo variant="Board">
											<StArea variant="Board">{item.area}</StArea>
											<StDetailArea variant="Board">{item.detailArea}</StDetailArea>
										</StCardInfo>
										<StTagBox>
											{item.tags.map(tag => {
												return <li>{tag}</li>;
											})}
										</StTagBox>
									</StContent>
								</StCard>
							</Slide>
						);
					})}
				</SlideTrack>
			</CarouselContainer>
		</>
	);
};

export default Carousel;

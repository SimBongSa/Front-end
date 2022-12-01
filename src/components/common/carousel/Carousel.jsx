import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../../redux/modules/boardSlice";
import { StCard, StCardInfo, StContent, StImgWrapper } from "../cards/CardGrid.styled";
import { CarouselContainer, SlideTrack, Slide } from "./Carousel.styled";
import { StTagBox } from "../cards/CardGrid.styled";
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

	return (
		<>
			<CarouselContainer>
				<h1>모집 종료 예정인 봉사활동</h1>
				<SlideTrack>
					{boardList.map((item, idx) => {
						return (
							<Slide key={item.boardId}>
								<StCard
									onClick={() => {
										navigate(`/boards/${item.boardId}`);
									}}
								>
									<StImgWrapper>
										<img src={item.boardImage} loading="lazy" alt="thumbnail" />
									</StImgWrapper>
									<StContent>
										<p className="title">{item.title}</p>
										<StCardInfo>
											<p>
												{item.area} - {item.detailArea}
											</p>
											<p className="price">D-4</p>
										</StCardInfo>
									</StContent>
									<StTagBox>
										{item.tags.map(tag => {
											return <li>{tag}</li>;
										})}
									</StTagBox>
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

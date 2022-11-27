import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent, BtnBox, Button } from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import KaMarker from "./../Map/KaMarker";
import { TbMapPin, TbChevronRight, TbChevronLeft } from "react-icons/tb";

const Board = () => {
	const dispatch = useDispatch();
	const boards = useSelector(state => state.boards.boards);
	const area = useSelector(state => state.boards.area);

	const [page, setPage] = useState(1);
	const size = 10;

	//popup btn
	const [showPopup, setShowPopup] = useState(false);
	const togglePopup = event => {
		setShowPopup(event.target.value);
	};

	useEffect(() => {
		dispatch(__getBoard({ page, size }));
	}, [dispatch, size, page]);

	return (
		<BoardContainer>
			{showPopup ? (
				<ListMap>
					<KaMarker boards={boards} />
				</ListMap>
			) : null}
			<BoardContent>
				{/* show popup btn */}
				<BtnBox>
					<Button onClick={togglePopup} value="false">
						지도
					</Button>
					{page === 1 ? (
						""
					) : (
						<Button
							onClick={() => {
								setShowPopup(false);
								setPage(prev => prev - 1);
								dispatch(__getBoard({ page, size }));
							}}
						>
							<TbChevronLeft />
						</Button>
					)}
					<Button
						onClick={() => {
							setShowPopup(false);
							setPage(prev => prev + 1);
							dispatch(__getBoard({ page, size }));
						}}
					>
						<TbChevronRight />
					</Button>
				</BtnBox>
				<CardGrid boards={boards} gridColumn={5} />
			</BoardContent>
		</BoardContainer>
	);
};

export default Board;

export const ListMap = styled.div`
	display: grid;
	width: 100%;
	height: 50vh;
	margin-top: 10rem;
`;

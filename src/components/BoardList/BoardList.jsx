import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent, ListMap, StBtnBox } from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import KaMarker from "./../Map/KaMarker";
import { ImMap2 } from "react-icons/im";
import styled from "styled-components";
import Stbtn from "../common/button/Button";
import { toast, ToastContainer } from "react-toastify";

const Board = () => {
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);
	const size = 12;
	const [modal, setModal] = useState(false);

	const boards = useSelector((state) => state.boards.boards);
	console.log(boards);

	useEffect(() => {
		dispatch(__getBoard({page, size}));
	}, [dispatch, page]);

	// const pageNum = Math.floor(boards.length / 12) === 0 ? 1 : Math.floor(boards.length / 12);

	return (
		<BoardContainer>
			<ToastContainer/>
			<BoardContent>
				<Stbtn variant="boards-map-open" onClick={() => setModal(!modal)}>
					지도 보기 <StMap />
				</Stbtn>
				{modal ? (
					<ListMap>
						<Stbtn variant="boards-map-close" onClick={() => setModal(false)}>
							X
						</Stbtn>
						<KaMarker boards={boards} />
					</ListMap>
				) : null}
				<CardGrid boards={boards} gridColumn={5} />
				<StBtnBox
					onClick={() =>{
						setPage((prev) => prev + 1);
						dispatch(__getBoard({ page, size }));
					}}
				>
					더 보기
				</StBtnBox>
			</BoardContent>
		</BoardContainer>
	);
};

export default Board;

export const StMap = styled(ImMap2)`
	font-size: 0.9rem;
`;

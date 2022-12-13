import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent, ListMap, StBtnBox, StMap, StArrow } from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import KaMarker from "./../Map/KaMarker";
import Stbtn from "../common/button/Button";
import { toast, ToastContainer } from "react-toastify";


const Board = () => {
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);
	const size = 12;
	const [modal, setModal] = useState(false);

	const boards = useSelector(state => state.boards.boards);

	useEffect(() => {
		dispatch(__getBoard({ page, size }));
	}, [dispatch, page]);

	return (
		<BoardContainer>
			<ToastContainer />
			<BoardContent>
				<Stbtn 
					variant="scroll-to-top" 
					onClick={() => {
						window.scrollTo(0, 0);
					}}>
						<StArrow/>
				</Stbtn>
				<Stbtn 
					variant="boards-map-open" 
					onClick={() => {
						setModal(!modal)
					}}>
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
					onClick={() => {
						setPage(prev => prev + 1);
						dispatch(__getBoard({ page, size }));
					}}
				>
					더 보기
				</StBtnBox>
				<scrollToTop/>
			</BoardContent>
		</BoardContainer>
	);
};

export default Board;
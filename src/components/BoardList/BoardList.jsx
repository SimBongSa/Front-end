import CardGrid from "../common/cards/CardGrid";
import {
	BoardContainer,
	BoardContent,
	Button,
	StTitle,
	StMapBtn,
	StCloseBtn,
	ListMap,
	StBtnBox,
} from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import KaMarker from "./../Map/KaMarker";
import { ImMap2 } from "react-icons/im";
import styled from "styled-components";

const Board = () => {
	const dispatch = useDispatch();
	const boards = useSelector(state => state.boards.boards);

	const [page, setPage] = useState(1);
	const size = 12;

	const [modal, setModal] = useState(false);

	useEffect(() => {
		dispatch(__getBoard({ page, size }));
	}, [dispatch, size, page]);

	return (
		<BoardContainer>
			<StTitle>
				<div>봉사 검색 결과</div>
				<div>{boards.length}개</div>
			</StTitle>
			<BoardContent>
				<div>
					<StMapBtn onClick={() => setModal(!modal)}>지도 보기 <StMap/></StMapBtn>
				</div>
				{modal ? (
					<ListMap>
						<StCloseBtn onClick={() => setModal(false)}>X</StCloseBtn>
						<KaMarker boards={boards} />
					</ListMap>
				) : null}
				<CardGrid boards={boards} gridColumn={5} />
				<StBtnBox>
					{page === 1 ? (
						<Button>❮</Button>
					) : (
						<Button
							onClick={() => {
								setPage(prev => prev - 1);
								dispatch(__getBoard({ page, size }));
							}}
						>
							❮
						</Button>
					)}
					<div>{page}/14</div>
					<Button
						onClick={() => {
							setPage(prev => prev + 1);
							dispatch(__getBoard({ page, size }));
						}}
					>
						❯
					</Button>
				</StBtnBox>
			</BoardContent>
		</BoardContainer>
	);
};

export default Board;

export const StMap = styled(ImMap2)`
	font-size: .9rem;
`
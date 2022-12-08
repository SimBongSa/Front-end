import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent, StTitle, ListMap, StBtnBox } from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import KaMarker from "./../Map/KaMarker";
import { ImMap2 } from "react-icons/im";
import styled from "styled-components";
import Stbtn from "../common/button/Button";

const Board = () => {
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);
	const size = 12;
	const [modal, setModal] = useState(false);

	const boards = useSelector(state => state.boards.boards);

	useEffect(() => {
<<<<<<< HEAD
		dispatch(__getBoard({ page, size }));
	}, [dispatch, page]);

=======
		dispatch(__getBoard({ page, size}))
	}, [dispatch, page])
>>>>>>> bccff54f0b80a6d34c891b32d4cbb59505a113ca
	const pageNum = Math.floor(boards.length / 12) === 0 ? 1 : Math.floor(boards.length / 12);

	return (
		<BoardContainer>
			<StTitle>
				<div>봉사 검색 결과</div>
				<div>{boards.length}개</div>
			</StTitle>
			<BoardContent>
				<div>
					<Stbtn variant="boards-map-open" onClick={() => setModal(!modal)}>
						지도 보기 <StMap />
					</Stbtn>
				</div>
				{modal ? (
					<ListMap>
						<Stbtn variant="boards-map-close" onClick={() => setModal(false)}>
							X
						</Stbtn>
						<KaMarker boards={boards} />
					</ListMap>
				) : null}
				<CardGrid boards={boards} gridColumn={5} />
				<StBtnBox>
					{page === 1 ? (
						<Stbtn variant="boards-prev-next">❮</Stbtn>
					) : (
						<Stbtn
							variant="boards-prev-next"
							onClick={() => {
								setPage(prev => prev - 1);
								dispatch(__getBoard({ page, size }));
							}}
						>
							❮
						</Stbtn>
					)}
					<div>
						{page}/{pageNum}
					</div>
					<Stbtn
						variant="boards-prev-next"
						onClick={() => {
							if (page === Math.floor(12 / boards.length)) {
								alert("마지막 페이지입니다");
							} else {
								setPage(prev => prev + 1);
								dispatch(__getBoard({ page, size }));
							}
						}}
					>
						❯
					</Stbtn>
				</StBtnBox>
			</BoardContent>
		</BoardContainer>
	);
};

export default Board;

export const StMap = styled(ImMap2)`
	font-size: 0.9rem;
`;

export const StNoData = styled.h1`
	text-align: center;
	margin-top: 15rem;
	font-size: 2rem;
	font-weight: 300;
`;

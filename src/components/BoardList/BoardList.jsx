import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent, StTitle, ListMap, StBtnBox } from "./BoardList.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import KaMarker from "./../Map/KaMarker";
import { ImMap2 } from "react-icons/im";
import styled from "styled-components";
import Stbtn from "../common/button/Button";
import { useLocation } from "react-router-dom";

const Board = () => {

	const dispatch = useDispatch();
	const boards = useSelector(state => state.boards.boards);

	const [page, setPage] = useState(1);
	const size = 12;

	const [modal, setModal] = useState(false);

	// 검색을 통해 들어온 경우,
	const { state } = useLocation();
	console.log("검색결과", state);

	if (state) {
		const pageNum = Math.floor(state.length / 12) === 0 ? 1 : Math.floor(state.length / 12);
		return (
			<BoardContainer>
				<StTitle>
					<div>봉사 검색 결과</div>
					검색결과임
					<div>{state.length}개</div>
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
							<KaMarker boards={state} />
						</ListMap>
					) : null}
					<CardGrid boards={state} gridColumn={5} />
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
						<div>{page}/{pageNum}</div>
						<Stbtn
							variant="boards-prev-next"
							onClick={() => {
								if (page === Math.floor(12 / state.length)) {
									alert("마지막 페이지입니다")
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
		)
	} else if (state === null) {
		<BoardContainer>
			검색 결과가 없습니다
		</BoardContainer>
	} else {
		// 그냥 게시물 리스트
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
						<div>{page}/{Math.floor(12 / boards.length)}</div>
						<Stbtn
							variant="boards-prev-next"
							onClick={() => {
								if (page === Math.floor(12 / boards.length)) {
									alert("마지막 페이지입니다.")
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

	}
};

export default Board;

export const StMap = styled(ImMap2)`
	font-size: 0.9rem;
`;
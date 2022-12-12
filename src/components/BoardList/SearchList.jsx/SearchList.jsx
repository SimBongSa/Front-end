import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Stbtn } from "../../common/button/Button.styled";
import CardGrid from "../../common/cards/CardGrid";
import KaMarker from "../../Map/KaMarker";
import { StMap } from "../BoardList";
import { BoardContainer, BoardContent, ListMap, StBtnBox, StTitle } from "../BoardList.styled";

const SearchList = () => {
	const state = useSelector(state => state.boards.searchResult);

	const [modal, setModal] = useState(false);
	const [page, setPage] = useState(1);

	const pageNum = Math.floor(state?.length / 12) === 0 ? 1 : Math.floor(state?.length / 12);

	if (state) {
		return (
			<BoardContainer>
				<StTitle>
					<div>봉사 검색 결과</div>
					<div>{state.length}개</div>
				</StTitle>
				<BoardContent>
					<Stbtn variant="boards-map-open" onClick={() => setModal(!modal)}>
						지도 보기 <StMap />
					</Stbtn>
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
								if (page === Math.floor(12 / state.length)) {
									alert("마지막 페이지입니다");
								} else {
									setPage(prev => prev + 1);
								}
							}}
						>
							❯
						</Stbtn>
					</StBtnBox>
				</BoardContent>
			</BoardContainer>
		);
	} else {
		return <StNoData>검색 결과가 없습니다.</StNoData>;
	}
};

export default SearchList;

export const StNoData = styled.h1`
	text-align: center;
	margin-top: 15rem;
	font-size: 2rem;
	font-weight: 300;
`;

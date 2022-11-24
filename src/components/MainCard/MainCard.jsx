import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import CardGrid from "../common/cards/CardGrid";

const MainCard = () => {

  const dispatch = useDispatch();
  const mainBoard = useSelector((state) => state.boards.boards)
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(4);

  useEffect(() => {
    dispatch(__getBoard({page, size}))
  },[dispatch, page, size])
  console.log(mainBoard);

  return(
    <MainCardContainer>
      <MainTitle>모집 중인 봉사활동</MainTitle>
      <CardWrapper>
        <CardGrid
          boards={mainBoard}
          gridColumn={2}
        />
      </CardWrapper>
    </MainCardContainer>
  )
};

export default MainCard;

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 3rem;
`

export const CardWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`
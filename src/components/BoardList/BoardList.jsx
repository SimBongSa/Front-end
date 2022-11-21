import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent } from "./BoardList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import KaMap from "../Map/KaMap";
import { useState } from "react";

const Board = () => {
  
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.boards);
  const area = useSelector((state) => state.boards.area);

  const [page, setPage] = useState(1);
  const size = 10;

  useEffect(() => {
    dispatch(__getBoard({page, size}));
  }, [dispatch, size, page]);

  return (
    <BoardContainer>
      <ListMap>
        <KaMap mapWidth="100%" mapHeight="100%"/>
      </ListMap>
      <BoardContent>
        {
          page === 1 ? <button></button> : (
            <button onClick={() => {
              setPage((prev) => prev - 1);
              dispatch(__getBoard({page, size}));
            }}>이전</button>
          )
        }
        <button onClick={() => {
          setPage((prev) => prev + 1);
          dispatch(__getBoard({page, size}));
        }}>다음</button>
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

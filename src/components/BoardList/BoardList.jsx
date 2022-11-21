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
  const [page, setPage] = useState(1);

  const area = useSelector((state) => state.boards.area);
  useEffect(() => {
    dispatch(__getBoard(page));
  }, [dispatch, page]);

  return (
    <BoardContainer>
      <ListMap>
        <KaMap mapWidth="100%" mapHeight="100%"/>
      </ListMap>
      <BoardContent>
        <CardGrid boards={boards} />
        {
          page === 1 ? <button></button> : (
            <button onClick={() => {
              setPage((prev) => prev - 1);
              dispatch(__getBoard(page));
            }}>이전</button>
          )
        }
        <button onClick={() => {
          setPage((prev) => prev + 1);
          dispatch(__getBoard(page));
        }}>다음</button>
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

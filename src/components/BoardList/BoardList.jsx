import SearchBar from "../SearchBar/SearchBar";
import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent } from "./BoardList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoards } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import KaMap from "../Map/KaMap";

const Board = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.boards);

  console.log(boards)

  useEffect(() => {
    dispatch(__getBoards());
  }, [dispatch]);

  return (
    <BoardContainer>
      <SearchBar />
      <BoardContent>
        <CardGrid boards={boards} />
      </BoardContent>
      <ListMap>
        <KaMap mapHeight="100%" />
      </ListMap>
    </BoardContainer>
  );
};

export default Board;

export const ListMap = styled.div`
  display: grid;
  width: 50%;
  height: 109.85vh;
  margin-top: 10rem;
  float: right;
`
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
  const area = useSelector((state) => state.boards.area);
  
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
        <KaMap mapWidth="48%" mapHeight="60%" position="fixed" />
      </ListMap>
    </BoardContainer>
  );
};

export default Board;

export const ListMap = styled.div`
  display: grid;
  width: 50%;
  height: 107vh;
  margin-top: 10rem;
  float: right;
`;

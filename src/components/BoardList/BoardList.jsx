import SearchBar from "../SearchBar/SearchBar";
import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent } from "./BoardList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import KaMap from "../Map/KaMap";

const Board = () => {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.boards.boards);
  const area = useSelector((state) => state.boards.area);
<<<<<<< HEAD
  console.log(area);

=======
  
>>>>>>> 3ebd3b932d6a72c9c1a47d6717f040bfed8042fb
  useEffect(() => {
    dispatch(__getBoard());
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
  height: 107vh;
  margin-top: 10rem;
  float: right;
`;

import SearchBar from "../SearchBar/SearchBar";
import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent } from "./BoardList.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoards } from "../../redux/modules/boardSlice";

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
    </BoardContainer>
  );
};

export default Board;

import CardGrid from "../common/cards/CardGrid";
import { BoardContainer, BoardContent } from "./BoardList.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/boardSlice";
import styled from "styled-components";
import KaMarker from "./../Map/KaMarker";

const Board = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.boards);
  const area = useSelector((state) => state.boards.area);
  console.log(boards);

  const [page, setPage] = useState(1);
  const size = 10;

  //popup btn
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = (event) => {
    setShowPopup(event.target.value);
  };

  useEffect(() => {
    dispatch(__getBoard({ page, size }));
  }, [dispatch, size, page]);

  return (
    <BoardContainer>
      {showPopup ? (
        <ListMap>
          <KaMarker boards={boards} />
        </ListMap>
      ) : null}
      <BoardContent>
        {/* show popup btn */}
        <button onClick={togglePopup} value="false">
          지도보기
        </button>
        {page === 1 ? (
          <button></button>
        ) : (
          <button
            onClick={() => {
              setPage((prev) => prev - 1);
              dispatch(__getBoard({ page, size }));
            }}
          >
            이전
          </button>
        )}
        <button
          onClick={() => {
            setShowPopup(false);
            setPage((prev) => prev + 1);
            dispatch(__getBoard({ page, size }));
          }}
        >
          다음
        </button>
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

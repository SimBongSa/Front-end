import {
  CardContainer,
  Card,
  CardImg,
  CardTitle,
  CardContent,
  CardMoveLeftBtn,
  CardMoveRightBtn,
} from "./Cards.styled";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

const Cards = ({ maindate, boardId }) => {
  const [moveIndex, setMoveIndex] = useState(0);

  const moveLeft = () => {
    setMoveIndex((prev) => prev - 20);
  };

  const moveRight = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 20);
  };

  const getDateDiff = (d1, d2) => {
    const dueDay = new Date(d1);
    const today = new Date(d2);
    const diffDate = dueDay.getTime() - today.getTime();
    return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <CardMoveLeftBtn onClick={moveLeft}>왼쪽</CardMoveLeftBtn>
      <CardContainer style={{ transform: `translateX(${moveIndex}%)` }}>
        <Card key={boardId}>
          <p className="price">D - 1</p>
          <CardImg>{/* <img src={obj.boardImage} alt="test" /> */}</CardImg>
          <CardTitle>
            <p>지역</p>
            <span>상세 지역</span>
          </CardTitle>
        </Card>
      </CardContainer>
      {moveIndex === 0 ? null : (
        <CardMoveRightBtn onClick={moveRight}>오른쪽</CardMoveRightBtn>
      )}
    </>
  );
};

export default Cards;

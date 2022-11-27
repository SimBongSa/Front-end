import {
  CardContainer,
  Card,
  CardTitle,
  CardMoveLeftBtn,
  CardMoveRightBtn,
} from "./Cards.styled";
import { useState } from "react";

const Cards = ({ maindate, boardList }) => {
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

  return (
    <>
      <CardMoveLeftBtn onClick={moveLeft}>왼쪽</CardMoveLeftBtn>
      <CardContainer style={{ transform: `translateX(${moveIndex}%)` }}>
        <Card>
          <p className="price">D - 1</p>
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

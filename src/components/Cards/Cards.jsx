import {
  CardContainer,
  Card,
  CardImg,
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
<<<<<<< HEAD
        <Card>
          <p className="price">D - 1</p>
          <CardImg>{/* <img src={obj.boardImage} alt="test" /> */}</CardImg>
          <CardTitle>
            <p>지역</p>
            <span>상세 지역</span>
          </CardTitle>
        </Card>
=======
        {maindate && maindate.length > 0
          ? maindate.map((obj, boardId) => {
              return (
                <Card key={boardId}>
                  <div>D-4</div>
                  {obj.boardId}
                  <CardImg>
                    {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
                  </CardImg>
                  <CardTitle>
                    <p>{obj.area}</p>
                    <span>{obj.detailArea}</span>
                  </CardTitle>
                  {/* <CardContent>Children Christmas Santa Volunteer</CardContent> */}
                </Card>
              );
            })
          : ""}

>>>>>>> f60b5ddf99f313c0e856aa77579aa538f0a2914b
      </CardContainer>
      {moveIndex === 0 ? null : (
        <CardMoveRightBtn onClick={moveRight}>오른쪽</CardMoveRightBtn>
      )}
    </>
  );
};

export default Cards;

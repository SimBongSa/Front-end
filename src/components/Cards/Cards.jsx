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
import { __getmainlist } from "../../redux/modules/calendarSlice";
import { useSelector, useDispatch } from "react-redux";

const Cards = ({ maindate, boardList }) => {
  const [moveIndex, setMoveIndex] = useState(0);
  const dispatch = useDispatch();
  const mainlist = useSelector((state) => state.calendarList.mainList);
  
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
      </CardContainer>
      {moveIndex === 0 ? null : (
        <CardMoveRightBtn onClick={moveRight}>오른쪽</CardMoveRightBtn>
      )}
    </>
  );
};

export default Cards;

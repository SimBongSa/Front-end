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
import { __getBoards } from "../../redux/modules/boardSlice";

const Cards = ({ maindate, boardId }) => {
  const [moveIndex, setMoveIndex] = useState(0);
  const dispatch = useDispatch();
  const mainlist = useSelector((state) => state.calendarList.mainList);
  const boards = useSelector((state) => state.boards.boards);

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
  // useEffect(() => {
  //   dispatch(__getBoards());
  // }, [dispatch]);
  // console.log(boards);
  return (
    <>
      <CardMoveLeftBtn onClick={moveLeft}>왼쪽</CardMoveLeftBtn>
      <CardContainer style={{ transform: `translateX(${moveIndex}%)` }}>
        {maindate && maindate.length > 0
          ? maindate.map((obj, boardId) => {
              const dDay = getDateDiff(obj.dueDay, today);
              return (
                <Card key={boardId}>
                  <p className="price">D - {dDay}</p>
                  <CardImg>
                    <img src={obj.boardImage} alt="test" />
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

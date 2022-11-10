import { CardContainer, Card, CardImg, CardTitle, CardContent, CardMoveLeftBtn, CardMoveRightBtn } from "./Cards.styled";
import { useState } from "react";

const Cards = () => {

  const [moveIndex, setMoveIndex] = useState(0);

  const moveLeft = () => {
    setMoveIndex((prev) => prev - 20);
  };

  const moveRight = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 20);
  }

  return (
    <>
      <CardMoveLeftBtn onClick={moveLeft}>왼쪽</CardMoveLeftBtn>
        <CardContainer style={{ transform: `translateX(${moveIndex}%)` }}>
          <Card>
            <CardImg>
              {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
            </CardImg>
            <CardTitle>
              <p>W Children Hospital</p>
              <span>100 Smart Street, Gangnam-gu</span>
            </CardTitle>
            {/* <CardContent>Children Christmas Santa Volunteer</CardContent> */}
          </Card>

          <Card>
            <CardImg>
              {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
            </CardImg>
            <CardTitle>
              <p>W Children Hospital</p>
              <span>100 Smart Street, Gangnam-gu</span>
            </CardTitle>
            {/* <CardContent>Children Christmas Santa Volunteer</CardContent> */}
          </Card>

          <Card>
            <CardImg>
              {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
            </CardImg>
            <CardTitle>
              <p>W Children Hospital</p>
              <span>100 Smart Street, Gangnam-gu</span>
            </CardTitle>
            {/* <CardContent>Children Christmas Santa Volunteer</CardContent> */}
          </Card>

          <Card>
            <CardImg>
              {/* <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/> */}
            </CardImg>
            <CardTitle>
              <p>W Children Hospital</p>
              <span>100 Smart Street, Gangnam-gu</span>
            </CardTitle>
            {/* <CardContent>Children Christmas Santa Volunteer</CardContent> */}
          </Card>
        </CardContainer>
        {
          moveIndex === 0 ? null : <CardMoveRightBtn onClick={moveRight}>오른쪽</CardMoveRightBtn>
        }  
    </>
  )
};

export default Cards;
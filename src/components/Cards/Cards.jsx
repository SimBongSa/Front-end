import { CardContainer, Card, CardImg, CardTitle, CardContent } from "./Cards.styled";
import { useState } from "react";

const Cards = () => {

  const [moveIndex, setMoveIndex] = useState(0);

  const moveLeft = () => {
    if (moveIndex === 0) {
      return;
    }
    setMoveIndex((prev) => prev + 10);
  };

  const moveRight = () => {
    setMoveIndex((prev) => prev - 10);
  }

  return (
    <CardContainer style={{ transform: `translateX(${moveIndex}%)` }}>
      <button onClick={moveLeft}>left</button>
      <button onClick={moveRight}>right</button>
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
  )
};

export default Cards;


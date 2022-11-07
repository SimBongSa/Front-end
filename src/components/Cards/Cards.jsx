import styled from "styled-components";
import { CardContainer, Card, CardImg, CardTitle } from "./Cards.styled";

const Cards = () => {
  return (
    <CardContainer>
      <Card>
        <CardImg>
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/>
        </CardImg>
        <CardTitle>
          <p>W Children Hospital</p>
          <span>100 Smart Street, Gangnam-gu</span>
        </CardTitle>
      </Card>

      <Card>
        <CardImg>
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/>
        </CardImg>
        <CardTitle>
          <p>W Children Hospital</p>
          <span>100 Smart Street, Gangnam-gu</span>
        </CardTitle>
      </Card>

      <Card>
        <CardImg>
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/>
        </CardImg>
        <CardTitle>
          <p>W Children Hospital</p>
          <span>100 Smart Street, Gangnam-gu</span>
        </CardTitle>
      </Card>

      <Card>
        <CardImg>
          <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="test"/>
        </CardImg>
        <CardTitle>
          <p>W Children Hospital</p>
          <span>100 Smart Street, Gangnam-gu</span>
        </CardTitle>
      </Card>
    </CardContainer>
  )
};

export default Cards;


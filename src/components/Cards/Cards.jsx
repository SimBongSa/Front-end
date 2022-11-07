import styled from "styled-components";

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

export const CardContainer = styled.section`
  z-index: 0;
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
`

export const Card = styled.article`
  margin: 30px auto;
  width: 300px;
  height: 350px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s;
  margin: 0.5rem;
  @media ( max-width: 1400px) {
    width: 800px;
    height: 250px;
  }
  @media ( max-width: 1024px) {
    width: 700px;
    height: 250px;
  }
  @media ( max-width: 768px) {
    width: 400px;
    height: 250px;
  }
`

export const CardImg = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 20px;
  & img {
    width: inherit;
    height: inherit;
    border-radius: 20px;
    object-fit: cover;
  }
`

export const CardTitle = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: -80px;
  height: 40px;
  & p {
    color: white;
  }
  & span {
    color: gray;
  }
`
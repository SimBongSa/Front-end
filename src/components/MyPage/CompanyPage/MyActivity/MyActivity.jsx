import { MyActivityContainer, MyActivityCards, Card, ImgWrapper } from "./MYActivity.styled";
import styled from "styled-components";

const MyActivity = ({companyBoards}) => {


  const today = new Date().toISOString().split("T")
  console.log(today[0])

  return (
    <MyActivityContainer>
      <MyActivityCards>

        {/* <Card>

          <h1>+</h1>
          <p>Add Activity</p>
        </Card> */}

        {
          companyBoards?.map((item) => {
            return (
              <Card key={item.boardId}>
                <ImgWrapper></ImgWrapper>
                <Content>
                  <p className="title">{ item.title }</p>
                  <CardInfo>
                    <p>{ item.area } - {item.detailArea}</p>
                    <p className="price">D-4</p>
                  </CardInfo>
                </Content>
              </Card>
            )
          })
        }

      </MyActivityCards>
    </MyActivityContainer>
  )
};

export default MyActivity;


export const Content = styled.div`
  padding: 1.5rem;
  & .title {
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .price {
    padding: 0.5rem 1rem;
    border-radius: 12rem;
    background-color: #303032;
  }
`

import { MyActivityContainer, MyActivityCards, Card, ImgWrapper, Content, CardInfo } from "./MyActivity.styled";
import styled from "styled-components";

const MyActivity = ({companyBoards}) => {

  const today = new Date().toISOString().split("T")
  console.log(today[0])

  return (
    <MyActivityContainer>
      <MyActivityCards>

        <Card>

          <h1>+</h1>
          <p>Add Activity</p>
        </Card>

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
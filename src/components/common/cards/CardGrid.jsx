import { useNavigate } from "react-router-dom";
import {
  CardGridContainer,
  Cards,
  Card,
  ImgWrapper,
  Content,
  CardInfo,
} from "./CardGrid.styled";

const CardGrid = ({ companyBoards, boards }) => {
  const navigate = useNavigate();

  const getDateDiff = (d1, d2) => {
    const dueDay = new Date(d1);
    const today = new Date(d2);
    const diffDate = dueDay.getTime() - today.getTime();
    return Math.round(Math.abs(diffDate / (1000 * 60 * 60 * 24)));
  };
  const today = new Date().toISOString().split("T")[0];

  return (
    <CardGridContainer>
      <Cards>
        {/* companyBoards 기업 상세페이지 */}
        {companyBoards?.map((item) => {
          return (
            <Card key={item.boardId}>
              <ImgWrapper />
              <Content>
                <p className="title">{item.title}</p>
                <CardInfo>
                  <p>
                    {item.area} - {item.detailArea}
                  </p>
                  <p className="price">D-4</p>
                </CardInfo>
              </Content>
            </Card>
          );
        })}
        {/* boards 전체 게시물 리스트  */}
        {boards?.map((item) => {
          const dDay = getDateDiff(item.dueDay, today);
          return (
            <Card
              key={item.boardId}
              // onClick={(item) => getArea(item?.area)}
              onClick={() => navigate(`/boards/${item.boardId}`)}
            >
              <ImgWrapper>
                <img src={item.boardImage} alt="thumbnail" />
              </ImgWrapper>
              <Content>
                <p className="title">{item.title}</p>
                <CardInfo>
                  <p>{item.area}</p>
                  <p className="price">D - {dDay}</p>
                </CardInfo>
              </Content>
            </Card>
          );
        })}
      </Cards>
    </CardGridContainer>
  );
};

export default CardGrid;

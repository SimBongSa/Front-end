import { useNavigate } from "react-router-dom";
import {
  CardGridContainer,
  Cards,
  Card,
  ImgWrapper,
  Content,
  TagBox,
  CardInfo,
} from "./CardGrid.styled";
const CardGrid = ({ gridColumn, companyBoards, boards, userEnroll }) => {
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
      <Cards
        gridColumn={gridColumn}
      >
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
                <TagBox>
                  {
                    item?.tags?.map((tag) => {
                      return (
                        <li>{tag}</li>
                      )
                    })
                  }
                </TagBox>
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
              onClick={() => navigate(`/boards/${item.boardId}`)}
            >
              <ImgWrapper>
                <img src={item.boardImage} loading="lazy" alt="thumbnail" />
              </ImgWrapper>
              <Content>
                <p className="title">{item.title}</p>
                <CardInfo>
                  <p>{item.area}</p>
                  <p className="price">D - {dDay}</p>
                </CardInfo>
                <TagBox>
                  {
                    item?.tags?.map((tag) => {
                      return (
                        <li>{tag}</li>
                      )
                    })
                  }
                </TagBox>
              </Content>
            </Card>
          );
        })}

        {userEnroll?.map((item) => {
          const dDay = getDateDiff(item.dueDay, today);
          return (
            <Card
              key={item.boardId}
              onClick={() => navigate(`/boards/${item.boardId}`)}
            >
              <ImgWrapper>
                <img src={item.boardImage} loading="lazy" alt="enrollImage" />
              </ImgWrapper>
              <Content>
                <p className="title">{item.title}</p>
                <CardInfo>
                  <p>{item.area}</p>
                  <p className="price">D - {dDay}</p>
                </CardInfo>
                <TagBox>
                  {
                    item?.tags?.map((tag) => {
                      return (
                        <li>{tag}</li>
                      )
                    })
                  }
                </TagBox>
              </Content>
            </Card>
          );
        })}
      </Cards>
    </CardGridContainer>
  );
};

export default CardGrid;
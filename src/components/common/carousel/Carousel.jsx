import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getBoard } from "../../../redux/modules/boardSlice";
import { TagBox } from "../../MyPage/MyApplicant/MyApplicant";
import { Card, CardInfo, Content, ImgWrapper } from "../cards/CardGrid.styled";

const Carousel = () => {

  const dispatch = useDispatch();
  const [size, setSize] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(__getBoard({page, size}));
  }, [dispatch, page, size]);

  const boardList = useSelector((state) => state.boards?.boards)

  console.log(boardList)

  return (
    <>
      <CarouselContainer>
      <h1>모집 종료 예정인 봉사활동</h1>
        <SlideTrack>
          {
            boardList.map((item) => {
              return (
                <Slide key={item.boardId}>
                  <Card key={item.boardId}>
                    <ImgWrapper>
                      <img src={item.boardImage} alt="thumbnail" />
                    </ImgWrapper>
                    <Content>
                      <p className="title">{item.title}</p>
                      <CardInfo>
                        <p>
                          {item.area} - {item.detailArea}
                        </p>
                        <p className="price">D-4</p>
                      </CardInfo>
                    </Content>
                    <TagBox>
                      {
                        item.tags.map((tag) => {
                          return (
                            <li>{tag}</li>
                          )
                        })
                      }
                    </TagBox>
                  </Card>
                </Slide>  
              )
            })
          }
        </SlideTrack>
      </CarouselContainer>
    </>
  )
};

export default Carousel;

export const CarouselContainer = styled.div`
	margin: auto;
  margin-top: 5rem;
  min-height: fit-content;
  width: 80%;
  justify-content: center;
	overflow: hidden;
  & h1 {
    font-size: 1.8rem;
    color: ${(props) => props.theme.textColor};
  }
  &::before,
  &::after {
    /* margin-top: 50rem; */
		content: "";
		height: 410px;
		position: absolute;
  }
  &::after {
    right: 0;
		top: 0;
		transform: rotateZ(180deg);
  }
  &::before {
		left: 0;
		top: 0;
	}
`

export const SlideTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 10);
  @keyframes scroll {
    0% { transform: translateX(0); }
	  100% { transform: translateX(calc(-250px * 5))}
  }
`

export const Slide = styled.div`
  margin: 1rem;
  width: 350px;
  color: black;
`

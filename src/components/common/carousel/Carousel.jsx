import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../../redux/modules/boardSlice";
import { Card, CardInfo, Content, ImgWrapper } from "../cards/CardGrid.styled";
import { CarouselContainer, SlideTrack, Slide } from "./Carousel.styled";
import { TagBox } from "../cards/CardGrid.styled";

const Carousel = () => {
	const dispatch = useDispatch();
	const [size, setSize] = useState(10);
	const [page, setPage] = useState(1);

	useEffect(() => {
		dispatch(__getBoard({ page, size }));
	}, [dispatch, page, size]);

	const boardList = useSelector(state => state.boards?.boards);

  return (
    <>
      <CarouselContainer>
      <h1>모집 종료 예정인 봉사활동</h1>
        <SlideTrack>
          {
            boardList.map((item, idx) => {
              return (
                <Slide key={item.boardId}>
                  <Card>
                    <ImgWrapper>
                      <img src={item.boardImage} loading="lazy" alt="thumbnail" />
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
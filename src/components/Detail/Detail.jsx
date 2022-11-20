import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardsId, __postApply } from "../../redux/modules/boardSlice";

import {
  DetailContainer,
  DetailContent,
  MapWrapper,
  DetailSide,
  DetailNavBtn,
} from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";

const Detail = () => {
  const dispatch = useDispatch();
  const boardsId = useSelector((state) => state?.boards?.boardsId);

  const { id } = useParams();

  useEffect(() => {
    dispatch(__getBoardsId(id));
  }, [dispatch, id]);

  return (
    <>
      <MainBg image={boardsId?.boardImage}/>
      <DetailContainer>
        <DetailContent>
          <h1>{ boardsId?.title }</h1>
          <hr/>
          <h3>봉사 활동 내용</h3>
          <span>{ boardsId?.content }</span>
          <h3>봉사 요청 사항</h3>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <MapWrapper>
            <KaMap input="false" area={boardsId?.area} mapWidth="100%" mapHeight="400px" />
          </MapWrapper>
        </DetailContent>

        <DetailSide>
          <h2>
            {boardsId?.startDate} - {boardsId?.endDate}
          </h2>
          <DetailNavBtn onClick={() => {
            dispatch(__postApply(id))
          }}>봉사자 신청하기</DetailNavBtn>
          <DetailNavBtn>봉사 단체 연락하기</DetailNavBtn>
        </DetailSide>
      </DetailContainer>
    </>
  );
};

export default Detail;

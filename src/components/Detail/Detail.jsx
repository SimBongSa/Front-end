import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __postApply } from "../../redux/modules/boardSlice";
import { useNavigate } from "react-router-dom";
import { __delBoard, __getBoardId } from "../../redux/modules/boardSlice";
import { useParams } from "react-router-dom";

import {
  DetailContainer,
  DetailContent,
  MapWrapper,
  DetailSide,
  DetailNavBtn,
} from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";
import Comment from "../Comment/Comment"

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardsId = useSelector((state) => state?.boards?.boardsId);
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getBoardId(id));
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
          <Comment/>
        </DetailContent>
        <DetailSide>
          <h2>
            {boardsId?.startDate} - {boardsId?.endDate}
          </h2>
          <DetailNavBtn onClick={() => {
            dispatch(__postApply(id))
          }}>봉사 신청하기</DetailNavBtn>
          <DetailNavBtn>봉사 단체 연락하기</DetailNavBtn>
          <DetailNavBtn
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
          >
            수정하기
          </DetailNavBtn>
          <DetailNavBtn
            onClick={() => {
              dispatch(__delBoard(id));
              navigate("/boards");
            }}
          >
            삭제하기
          </DetailNavBtn>
        </DetailSide>

      </DetailContainer>
    </>
  );
};

export default Detail;

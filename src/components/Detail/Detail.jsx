import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __delBoard,
  __getBoardId,
  __postApply,
} from "../../redux/modules/boardSlice";

import styled from "styled-components";

import {
  DetailContainer,
  DetailContent,
  MapWrapper,
  DetailNav,
  DetailNavBtn,
} from "./Detail.styled";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";

const Detail = () => {
  const focusTarget = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const boardsId = useSelector((state) => state?.boards?.boardsId);
  console.log(boardsId);
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  console.log("Detail.jsx boardsId =>", boardsId);

  return (
    <>
      <MainBg image={boardsId?.boardImage} />

      <DetailContainer>
        <DetailContent>
          <h1>{boardsId?.title}</h1>
          <hr />
          <h3>봉사 활동 내용</h3>
          <span>{boardsId?.content}</span>
          <h3>봉사 요청 사항</h3>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <h5>내가 만든 쿠키 너를 위해 구웠지</h5>
          <MapWrapper>
            <KaMap input="false" area={boardsId?.area} mapHeight="400px" />
          </MapWrapper>
        </DetailContent>

        <DetailNav>
          <h2>
            {boardsId?.startDate} - {boardsId?.endDate}
          </h2>

          <DetailNavBtn>봉사자 신청하기</DetailNavBtn>

          <DetailNavBtn
            onClick={() => {
              dispatch(__postApply(id));
            }}
          >
            봉사자 신청하기
          </DetailNavBtn>
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
        </DetailNav>
      </DetailContainer>
    </>
  );
};

export default Detail;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getBoardsId } from "../../redux/modules/boardSlice";

import styled from "styled-components";
import MainBg from "../MainBg/MainBg";
import KaMap from "../Map/KaMap";

const Detail = () => {
  const dispatch = useDispatch();
  const boardsId = useSelector((state) => state?.boards?.boardsId);

  const { id } = useParams();

  useEffect(() => {
    dispatch(__getBoardsId(id));
  }, [dispatch, id]);

  console.log("Detail.jsx boardsId =>", boardsId);

  return (
    <>
      <MainBg image={boardsId?.boardImage} />

        <DetailContainer>
          <DetailContent>
            <h1>{ boardsId?.title }</h1>
            <hr/>
            <h3>봉사 활동 내용</h3>
            <span>{ boardsId?.content }</span>
            <MapWrapper>
              <KaMap area={boardsId?.area} mapHeight="400px" />
            </MapWrapper>
          </DetailContent>

        <DetailNav>
          <h2>{ boardsId?.startDate } - { boardsId?.endDate }</h2>
          <DetailNavBtn>봉사자 신청하기</DetailNavBtn>
          <DetailNavBtn>봉사 단체 연락하기</DetailNavBtn>
        </DetailNav>

      </DetailContainer>
    </>
  );
};

export default Detail;

export const DetailContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2.5rem;
  min-height: 100vh;
`

export const DetailContent = styled.div`
  float: left;
  width: 60%;
  background: #aaaaaa;
  padding: 2rem;
`

export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
`

export const DetailNav = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 40%;
  z-index: 1;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  background: #aaaaaa;
  & h2 {
    font-size: 1.4rem;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #232323;
  }
`

export const DetailNavBtn = styled.h2`
  cursor: pointer;
  border: none;
  border-radius: 15px;
  background: white;
  color: black;
  margin: 0.4rem;
`
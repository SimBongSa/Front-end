import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MainBg from "../MainBg/MainBg";
import { __getBoardsId } from "../../redux/modules/boardSlice";
import CardGrid from "../common/cards/CardGrid";

const Detail = () => {
  const dispatch = useDispatch();
  const boardsId = useSelector((state) => state.boards.boardsId);

  const { id } = useParams();

  useEffect(() => {
    dispatch(__getBoardsId(id));
  }, [dispatch, id]);

  console.log("Detail.jsx boardsId =>", boardsId);

  return (
    <div style={{ margin: "300px" }}>
      <p>{boardsId?.title}</p>
      <p>{boardsId?.area}</p>
      <IMG src={boardsId?.boardImage} alt="" />
      <p>{boardsId?.dueDay}</p>
      <p>{boardsId?.startDate}</p>
      <p>{boardsId?.endDate}</p>
      <p>{boardsId?.content}</p>
    </div>
  );
};

export default Detail;

const IMG = styled.img``;
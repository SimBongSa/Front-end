import Input from "../common/input/Input";
import { useState, useEffect } from "react";
import {
  __getComment,
  __postComment,
  __putComment,
  __deleteComment,
} from "./../../redux/modules/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Comment() {
  const commentlist = useSelector((state) => state.commentList.commentList);
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    content: "",
  });
  const [newList, setNewList] = useState([]);
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();

  console.log(commentlist);

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch]);

  // useEffect(() => {
  //   // 계정ID
  //   // 내용
  //   // if (commentlist) setNewList(commentlist);
  //   // console.log(3);
  // }, [commentlist]);

  return (
    <>
      <h1>댓글</h1>
      <Input
        placeholder="댓글을 남겨주세요"
        value={content.content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(__postComment({ content, id }));
          setContent("");
        }}
      >
        댓글쓰기
      </button>
      {commentlist && commentlist.length > 0
        ? commentlist.map((commentlist, id) => {
            // console.log(commentlist.commentId);

            return (
              <Box key={id}>
                <h2>{commentlist.author}</h2>
                <div>{commentlist.content}</div>
                <div>{commentlist.createdAt}</div>
                <button
                  onClick={() => {
                    dispatch(__putComment(commentlist.commentId, content));
                    setContent("");
                  }}
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    dispatch(__deleteComment(commentlist.commentId));
                    setContent("");
                  }}
                >
                  삭제
                </button>
              </Box>
            );
          })
        : ""}
    </>
  );
}

export default Comment;

const Box = styled.div``;

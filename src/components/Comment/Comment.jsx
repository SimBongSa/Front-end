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

function Comment() {
  const commentlist = useSelector((state) => state.commentList.commentList);
  const dispatch = useDispatch();
  const [content, setContent] = useState({
    content: "",
  });

  console.log(commentlist);

  useEffect(() => {
    dispatch(__getComment(commentlist));
  }, [dispatch]);

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
          dispatch(__postComment({ content }));
          setContent("");
        }}
      >
        댓글쓰기
      </button>
      {commentlist && commentlist.length > 0
        ? commentlist.map((commentlist, commentId) => {
            return (
              <Box key={commentId}>
                <h2>{commentlist.author}</h2>
                <div>{commentlist.content}</div>
                <div>{commentlist.createdAt}</div>
                <button
                  onClick={() => {
                    dispatch(
                      __putComment({
                        comment_id: 1,
                        content: { content: content },
                      })
                    );
                    setContent("");
                  }}
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    dispatch(__deleteComment(commentId));
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

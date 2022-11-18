import Input from "../common/input/Input";
import { useState, useEffect } from "react";
import {
  __getComment,
  __postComment,
  __putComment,
  __deleteComment,
} from "../../redux/modules/commentSlice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

function Comment() {
  const commentlist = useSelector((state) => state.commentList.commentList);

  console.log(commentlist);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  // boardId
  const { id } = useParams();
  const boardId = id;
  // button disabled
  const [cookies] = useCookies(["Authorization"]);
  const username = cookies["username"];

  //comment get
  useEffect(() => {
    dispatch(__getComment(boardId));
  }, [dispatch, boardId]);

  return (
    <>
      <h1>댓글</h1>
      <Input
        type="text"
        placeholder="댓글을 남겨주세요"
        value={content?.content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          dispatch(__postComment({ content, id }));
          setContent("");
        }}
      >
        댓글쓰기
      </button>

      {commentlist && commentlist.length > 0
        ? commentlist.map((commentlist, index) => {
            const commentId = commentlist.commentId;
            return (
              <Box key={index}>
                <h2>{commentlist.author}</h2>
                <div>{commentlist.content}</div>
                <div>{commentlist.createdAt}</div>
                {username === commentlist.author ? (
                  <>
                    <Input
                      type="text"
                      placeholder="수정"
                      value={content?.content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                    <button
                      onClick={(e) => {
                        dispatch(__putComment({ commentId, content }));
                        setContent("");
                      }}
                    >
                      수정
                    </button>
                    <button
                      onClick={(e) => {
                        dispatch(__deleteComment(commentlist.commentId));
                        setContent("");
                      }}
                    >
                      삭제
                    </button>
                  </>
                ) : (
                  <>
                    <button>좋아요</button>
                    <button>신고</button>
                  </>
                )}
              </Box>
            );
          })
        : ""}
    </>
  );
}

export default Comment;

const Box = styled.div``;

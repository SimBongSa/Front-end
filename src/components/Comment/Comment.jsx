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
  const [cookies] = useCookies(["Authorization"]);
  const userName = cookies["username"];

  const commentList = useSelector((state) => state.comment.commentList);
  console.log(commentList)
  const dispatch = useDispatch();

  const { id } = useParams();

  const [editCommentId, setEditCommentId] = useState([]);
  const [content, setContent] = useState();
  const [comment, setComment] = useState({ comment: content });

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch, id]);

  return (
    <MainComponent>
      <CommentWriteWrap>
        <Input
          type="text"
          placeholder="댓글을 남겨주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div
          onClick={() => {
            dispatch(__postComment({ content, id }));
            setContent("");
          }}
        >
          댓글쓰기
        </div>
      </CommentWriteWrap>
      {commentList && commentList.length > 0
        ? commentList.map((item, index) => {
            const commentId = item.commentId;
            let isEditState = editCommentId.indexOf(commentId) === -1 ? false : true;
            return (
              <Box key={index}>
                <CommentTitleWrap>
                  <h2>{item?.nickname}</h2>
                  <CommentBtnWrap>
                    {userName === item.author ? (
                      <>
                        {!isEditState ? (
                          <div
                            onClick={() => {
                              if (editCommentId.indexOf(commentId) === -1)
                                setEditCommentId((prev) => [
                                  ...prev,
                                  commentId,
                                ]);
                            }}
                          >
                            수정
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              if (editCommentId.indexOf(commentId) !== -1) {
                                setEditCommentId(
                                  editCommentId.filter((el) => el !== commentId)
                                );
                                dispatch(
                                  __putComment({ commentId, content: comment })
                                );
                              }
                            }}
                          >
                            완료
                          </div>
                        )}
                        <div
                          onClick={() => {
                            dispatch(__deleteComment(commentId));
                          }}
                        >
                          삭제
                        </div>
                      </>
                    ) : (
                      <>
                        {/* <div>좋아요</div> */}
                        <div>신고</div>
                      </>
                    )}
                    <div>{item.createdAt.split("T")[0]}</div>
                  </CommentBtnWrap>
                </CommentTitleWrap>
                {isEditState ? (
                  <>
                    <input
                      type="text"
                      defaultValue={item.content}
                      value={comment.content?.content}
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </>
                ) : (
                  <div>{item.content}</div>
                )}
              </Box>
            );
          })
        : ""}
    </MainComponent>
  );
}

const MainComponent = styled.div`
  margin: 2.5rem;
`;
const CommentWriteWrap = styled.div`
  display: flex;
  align-items: center;
  & > div {
    cursor: pointer;
  }
`;
const CommentTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 8px 0;
`;
const CommentBtnWrap = styled.div`
  display: flex;
  align-items: center;

  & > div {
    cursor: pointer;
  }
`;
const Box = styled.div`
  margin: 16px 0;
`;

export default Comment;
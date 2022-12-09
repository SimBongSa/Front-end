import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getBoardId } from "../../../redux/modules/boardSlice"
import styled from "styled-components";
import { StSidePanel, StContact, StContactWrap } from "./ChatList.styled";

export const ChatList = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state?.chat?.chatList);

  return (
    <StSidePanel>
      <h1>문의 내역</h1>
      <StContact>
        <ul>
          {
            chatList ? (
                chatList?.map((item, idx) => {
                  return(
                    <ListGroup 
                      key={idx}
                      onClick={() => {
                        navigate(`/chat/${item.chatRoomId}`);
                        dispatch(__getBoardId(item.boardId));
                      }}
                    >
                      <StContactWrap>
                        {item.roomName}
                      </StContactWrap>
                    </ListGroup>
                  )
                })
            ) : (
              <ListGroup>
                <StContactWrap>
                  문의 내역이 없어요!
                </StContactWrap>
              </ListGroup>
            )
          }
        </ul>
      </StContact>
    </StSidePanel>
  )
}

export default ChatList;

export const ListGroup = styled.li`
  margin: auto 15px;
`
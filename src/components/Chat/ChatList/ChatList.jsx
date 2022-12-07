import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getBoardId } from "../../../redux/modules/boardSlice"
import styled from "styled-components";
import { StSidePanel, StContact, StContactWrap } from "./ChatList.styled";

export const ChatList = ({ chatList }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(chatList)

  return (
    <StSidePanel>
      <h1>Message : </h1>
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
            ) : (<div>{chatList}</div>)
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
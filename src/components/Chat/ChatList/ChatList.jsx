import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getBoardId } from "../../../redux/modules/boardSlice"
import styled from "styled-components";
import { StSidePanel, StContact, StContactWrap } from "./ChatList.styled";

export const ChatList = ({ chatList }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <StSidePanel>
      <h1>Message : </h1>
      <StContact>
        <ul>
          {
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
          }
        </ul>
      </StContact>
    </StSidePanel>
  )
}

export default ChatList;

export const ListGroup = styled.li`
  margin: auto 15px;
  /* box-shadow: 0px 4px 8px 0px #d8d4d4; */
`
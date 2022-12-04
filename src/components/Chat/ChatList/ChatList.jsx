import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StSidePanel, StContact, StContactWrap, StContactMeta } from "./ChatList.styled";

export const ChatList = ({ chatList }) => {

  console.log(chatList);

  const navigate = useNavigate();

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
                  onClick={() => navigate(`/chat/${item.chatRoomId}`)}
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
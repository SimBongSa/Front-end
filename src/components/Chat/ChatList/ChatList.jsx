import { useNavigate } from "react-router-dom";
import { StSidePanel, StContact, StContactWrap, StContactMeta } from "./ChatList.styled";

export const ChatList = ({ chatList }) => {

  const navigate = useNavigate();

  return (
    <StSidePanel>
      <h1>Message : </h1>
      <StContact>
        <ul>
          {
            chatList?.map((item) => {
              return(
                <li 
                  key={item.chatRoomId}
                  onClick={() => navigate(`/chat/${item.chatRoomId}`)}
                >
                  <StContactWrap>
                    {item.roomName}
                  </StContactWrap>
                </li>
              )
            })
          }
        </ul>
      </StContact>
    </StSidePanel>
  )
}

export default ChatList;
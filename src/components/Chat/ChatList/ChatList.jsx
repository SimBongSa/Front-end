import { useNavigate } from "react-router-dom";
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
                <li 
                  // key={item.chatRoomId}
                  key={idx}
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
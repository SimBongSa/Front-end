import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { StChatContent, StMyMessage, StReceiveMsg, ChatCard, ChatCardText } from "./ChatContent.styled";
import { __getChatHistory } from "../../../redux/modules/chatSlice";
import ChattingService from "../../../StomJS/SockInstance";
import { getCookieToken } from "../../../utils/cookie";

const ChattingServiceKit = new ChattingService();

export const ChatContent = () => {

  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  ChattingServiceKit.onConnect(`/topic/greetings/${id.id}`, {}, (newMessage) => {
    setReceiveMsg(newMessage)
  });

  const props  = useOutletContext();
  const setReceiveMsg = props.setReceiveMsg;
  const username = getCookieToken(["username"]);

  const chatHistory = useSelector((state) => state.chat.chatHistory);
  console.log("!!", chatHistory)
  const chatBoard = useSelector((state) => state.boards.board);

  const scrollRef = useRef();

  useEffect(() => {
    dispatch(__getChatHistory(id.id));
    if (props) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [dispatch, id, props]);

  return (
    <StChatContent>
      {
        chatBoard ? (
          <ChatCard onClick={() => navigate(`/boards/${chatBoard.boardId}`)}>
            <img src={chatBoard.boardImage} alt="boardImage" />
            <ChatCardText>
              <h2>{chatBoard.title}</h2>
              <span>{chatBoard.area}</span>
              <span>{chatBoard.startDate} - {chatBoard.endDate}</span>
            </ChatCardText>
          </ChatCard>
        ) : null
      }
      <ul>
        {
          chatHistory?.map((item) => {
            return (
              username === item.name ? (
                <StMyMessage key={item.id}>
                  <span>{item?.createdAt?.split('T')[1].substr(0,5)}</span>
                  <h4>{item.content}</h4>
                </StMyMessage>
              ) : (
                <StReceiveMsg key={item.id}>
                  <span>{item?.createdAt?.split('T')[1].substr(0,5)}</span>
                  <h4>{item.content}</h4>
                </StReceiveMsg>
              )
            )
          })
        }
      </ul>
      <div ref={scrollRef}/>
    </StChatContent>  
  )
};

export default ChatContent;
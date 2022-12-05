import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getBoardId } from "../../../redux/modules/boardSlice";
import { __getChatHistory } from "../../../redux/modules/chatSlice";
import ChattingService from "../../../StomJS/SockInstance";
import { getCookieToken } from "../../../utils/cookie";
import { AppliCard, AppliCardImg } from "../../MyPage/CompanyPage/MyApplicant/MyApplicant.styled";

const ChattingServiceKit = new ChattingService();

export const ChatContent = () => {

  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  ChattingServiceKit.onConnect(`/topic/greetings/${id.id}`, {}, (newMessage) => {
    setReceiveMsg(newMessage)
  });

  const props  = useOutletContext();
  const chatLog = props.chatLog;
  const setReceiveMsg = props.setReceiveMsg;
  const username = getCookieToken(["username"]);

  const chatHistory = useSelector((state) => state.chat.chatHistory);
  const chatBoard = useSelector((state) => state.boards.board);

  const scrollRef = useRef();

  useEffect(() => {
    dispatch(__getChatHistory(id.id));
    dispatch(__getBoardId(id.id));
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
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

        {/* 채팅기록 불러오기 */}
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
        {
          chatLog?.map((item, idx) => {
            return (
              <>
                {
                  username === item.userName ? (
                      <StMyMessage key={idx}>
                        <span>{item?.createdAt?.split('T')[1].substr(0,5)}</span>
                        <h4>{item.content}</h4>
                      </StMyMessage>
                  ) : (
                      <StReceiveMsg key={idx}>
                        <span>{item?.createdAt?.split('T')[1].substr(0,5)}</span>
                        <h4>{item.content}</h4>
                      </StReceiveMsg>
                  )
                }
              </>
            )
          })
        }
      </ul>
      <div ref={scrollRef}/>
    </StChatContent>  
  )
};

export default ChatContent;

export const StChatContent = styled.div`
  float: right;
  position: relative;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.subBgColor};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StMyMessage = styled.li`
  display: inline-flex;
  clear: both;
  float: right;
  height: max-content;
  width: fit-content;
  max-width: 100%;
  align-items: end;
  & h4 {
    border-radius: 50px 0px 50px 50px;
    width: fit-content;
    margin: 15px 20px 0px 0px;
    padding: 15px;
    font-size: 12px;
    background: white;
    color: #232323;
    border: 2px solid ${(props) => props.theme.btnColor};
  }
  & span {
    color: #232323;
    font-size: 0.7rem;
    margin-right: 10px;
  }
`

export const StReceiveMsg = styled.li`
  display: flex;
  flex-direction: row-reverse;
  clear: both;
  float: left;
  height: max-content;
  width: fit-content;
  max-width: 60%;
  align-items: end;
  & h4 {
    border-radius: 0px 50px 50px 50px;
    width: fit-content;
    margin: 15px 0px 0px 20px;
    padding: 15px;
    font-size: 12px;
    background: white;
    color: #232323;
    border: 2px solid ${(props) => props.theme.subTextColor};
  }
  & span {
    color: #232323;
    font-size: 0.7rem;
    margin-left: 10px;
  }
`

export const ChatCard = styled.div`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  cursor: pointer;
  clear: both;
  width: 30%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  top: 10px;
  height: 3rem;
  border: none;
  border-radius: 20px;
  color: #ccc;
  background: #232323;
  transition: all 0.3s;
  & img {
    display: none;
    width: 120px;
    border-radius: 15px;
    margin-right: 2rem;
  }
  &:hover {
    width: 95%;
    height: 7rem;
    justify-content: flex-start;
    padding: 2rem;
    & img {
      display: block;
      float: left;
    }
    & span {
      display: block;
    }
  }
`

export const ChatCardText = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  & h2 {
    font-weight: 500;
  }
  & span {
    display: none;
    font-weight: 300;
    font-size: 12px;
    &:nth-child(2) {
      margin-top: 15px;
    }
  }
`
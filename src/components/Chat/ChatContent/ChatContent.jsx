import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import ChattingService from "../../../StomJS/SockInstance";
import { getCookieToken } from "../../../utils/cookie";

const ChattingServiceKit = new ChattingService();

export const ChatContent = () => {

  const id = useParams();
  const username = getCookieToken(["username"]);
  const props  = useOutletContext();
  const chatLog = props.chatLog;
  const setReceiveMsg = props.setReceiveMsg;

  useEffect(() => {
    ChattingServiceKit.onConnect(`/topic/greetings/${id.id}`, {}, (newMessage) => {
      setReceiveMsg(newMessage)
    });
  }, [id, setReceiveMsg])

  return (
    <StChatContent>
      {
        chatLog?.map((item, idx) => {
          return (
            <ul key={idx}>
              {
                username === item.userName ? (
                  <StMyMessage>{item.content}</StMyMessage>
                ) : <StReceiveMsg>{item.content}</StReceiveMsg>
              }
            </ul>
          )
        })
      }
    </StChatContent>  
  )
};

export default ChatContent;

export const StChatContent = styled.div`
  float: right;
  height: 100%;
  width: 100%;
  background: #FBFBF9;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StMyMessage = styled.li`
  display: block;
  clear: both;
  border-radius: 50px 0px 50px 50px;
  width: fit-content;
  float: right;
  height: max-content;
  padding: 15px;
  margin: 15px 20px 0 0;
  font-size: 12px;
  color: #232323;
  border: 3px solid ${(props) => props.theme.btnColor};
`

export const StReceiveMsg = styled.li`
  display: block;
  clear: both;
  border-radius: 0px 50px 50px 50px;
  width: fit-content;
  float: left;
  height: max-content;
  margin: 15px 0px 0 20px;
  padding: 15px;
  font-size: 12px;
  text-align: right;
  color: #232323;
  border: 3px solid ${(props) => props.theme.subTextColor};
`
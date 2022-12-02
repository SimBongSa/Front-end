import { useEffect, useRef } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import ChattingService from "../../../StomJS/SockInstance";
import { getCookieToken } from "../../../utils/cookie";

const ChattingServiceKit = new ChattingService();

export const ChatContent = () => {

  const id = useParams();

  ChattingServiceKit.onConnect(`/topic/greetings/${id.id}`, {}, (newMessage) => {
    setReceiveMsg(newMessage)
  });

  const props  = useOutletContext();
  const chatLog = props.chatLog;
  const setReceiveMsg = props.setReceiveMsg;
  const username = getCookieToken(["username"]);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
  }, [props])

  return (
    <StChatContent>
      <ul>
      {
        chatLog?.map((item, idx) => {
          return (
            <>
              {
                username === item.userName ? (
                    <StMyMessage>
                      <span>{item?.createdAt?.split('T')[1].substr(0,5)}</span>
                      <h4>{item.content}</h4>
                    </StMyMessage>
                ) : (
                    <StReceiveMsg>
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
  height: 100%;
  width: 100%;
  background: #FBFBF9;
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
    color: #232323;
    border: 2px solid ${(props) => props.theme.subTextColor};
  }
  & span {
    color: #232323;
    font-size: 0.7rem;
    margin-left: 10px;
  }
`
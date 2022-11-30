import styled from "styled-components";
import ChatContent from "./ChatContent/ChatContent";
import ChatInput from "./ChatInput/ChatInput";
import ChatList from "./ChatList/ChatList";

import { getCookieToken } from "../../utils/cookie";
import ChattingService from "../../StomJS/SockInstance";
import { useCallback, useEffect, useState } from "react";

const ChattingServiceKit = new ChattingService();

export const Chat = () => {
  const token = getCookieToken(["access-token"]);
  const username = getCookieToken(["username"]);
  const [chatLog, setChatLog] = useState([]);
  const [receiveMsg, setReveiveMsg] = useState('OOO 님과의 대화입니다');
  const [message, setMessage] = useState('');

  ChattingServiceKit.onConnect('/topic/greetings/1', {}, (newMessage) => {
    setReveiveMsg(newMessage)
  });

  useEffect(() => {
    setChatLog([...chatLog, receiveMsg]);
  }, [receiveMsg, setChatLog]);

  const onSubmitHandler = (e) => {
    if (e.target.value !== '') {
      e.preventDefault();
      ChattingServiceKit.sendMessage({
        action: 'MESSAGE',
        userName: username,
        chatRoomId: 1,
        content: message,
        Authorization: token
      });
      setMessage('');
    } else {
      return false;
    }
  };

  const onChangeHandler = useCallback((e) => {
    setMessage(e.target.value);
  }, [])

  useEffect(() => {  
    return () => {
      ChattingServiceKit.onDisconnect();
    }
  }, []);

  return (
    <StChatContainer>
      <ChatList/>
      <StChatContentWrap>
        <ChatContent chatLog={chatLog} />
        <ChatInput message={message} onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} />
      </StChatContentWrap>
    </StChatContainer>
  )
};

export const StChatContainer = styled.div`
  display: flex;
	align-items: center;
	justify-content: center;
  height: 90vh;
  font-size: 1em;
	letter-spacing: 0.1px;
  text-rendering: optimizeLegibility;
	width: 80%;
  max-width: 1280px;
  height: 75vh;
  margin: 0 auto;
  margin-top: 10rem;
`

export const StChatContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 75%;
`
import styled from "styled-components";
import { getCookieToken } from "../../../utils/cookie";

export const ChatContent = ({ chatLog }) => {
  const username = getCookieToken(["username"]);

  return (
    <StChatContent>
      {
        chatLog?.map((item, idx) => {
          return (
            <div key={idx}>
              {
                username === item.userName ? (
                  <StMyMessage>{item.content}</StMyMessage>
                ) : <StReceiveMsg>{item.content}</StReceiveMsg>
              }
            </div>
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
  background: green;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StMyMessage = styled.h2`
  display: inline-block;
  border-radius: 50px 0px 50px 50px;
  min-width: 300px;
  width: fit-content;
  float: right;
  height: 3rem;
  padding: 1rem;
  margin: 1rem;
  background: #232323;
`

export const StReceiveMsg = styled.h2`
  display: block;
  border-radius: 0px 50px 50px 50px;
  min-width: 300px;
  width: fit-content;
  float: left;
  height: 3rem;
  margin: 1rem;
  padding: 1rem;
  background: tomato;
`
import styled from "styled-components";
import { BiSend } from "react-icons/bi";

export const ChatInput = ({message, onSubmitHandler, onChangeHandler}) => {
  return (
    <StChatForm onSubmit={onSubmitHandler}>
      <StChatInput
        placeholder="채팅을 일략허세여"
        value={message}
        onChange={onChangeHandler}
      />
      <StChatBtn><BiSend/></StChatBtn>
    </StChatForm>
  )
};

export default ChatInput;

export const StChatForm = styled.form`
  position: relative;
  width: 100%;
  height: 5rem;
  background: #FBFBF9;
`

export const StChatInput = styled.input`
  width: 80%;
  height: 80%;
  border: 1px solid ${(props) => props.theme.subTextColor};
  border-radius: 30px;
  outline: none;
  margin-left: 10%;
`
export const StChatBtn = styled.button`
  position: absolute;
  cursor: pointer;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  top: 5.5px;
  right: 11%;
  font-size: 1.4rem;
  padding: 11px;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.btnColor};
`
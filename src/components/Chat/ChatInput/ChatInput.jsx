import styled from "styled-components";

export const ChatInput = ({message, onSubmitHandler, onChangeHandler}) => {
  return (
    <StChatForm onSubmit={onSubmitHandler}>
      <StChatInput
        placeholder="채팅을 일략허세여"
        value={message}
        onChange={onChangeHandler}
      />
      <StChatBtn>asd</StChatBtn>
    </StChatForm>
  )
};

export default ChatInput;

export const StChatForm = styled.form`
  width: 100%;
  height: 3rem;
  background: #eee;
`

export const StChatInput = styled.input`
  width: 90%;
  height: 100%;
`
export const StChatBtn = styled.button`
  width: 10%;
  height: 100%;
`
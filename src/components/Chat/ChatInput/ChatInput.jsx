import styled from "styled-components";
import { BiSend } from "react-icons/bi";
import Stbtn from "../../common/button/Button";

export const ChatInput = ({ message, onSubmitHandler, onChangeHandler }) => {
	return (
		<StChatForm onSubmit={onSubmitHandler}>
			<StChatInput placeholder="채팅을 일략허세여" value={message} onChange={onChangeHandler} />
			<Stbtn variant="chat">
				<BiSend />
			</Stbtn>
		</StChatForm>
	);
};

export default ChatInput;

export const StChatForm = styled.form`
  position: relative;
  width: 100%;
  height: 5rem;
  background: ${(props) => props.theme.subBgColor};
`

export const StChatInput = styled.input`
  width: 80%;
  height: 80%;
  border: 1px solid ${(props) => props.theme.subTextColor};
  border-radius: 30px;
  outline: none;
  margin-left: 10%;
  margin-top: 7.5px;
`
export const StChatBtn = styled.button`
  position: absolute;
  cursor: pointer;
  width: calc(100% - 100px);
  margin-top: 25px;
  border: none;
  border-radius: 50%;
  font-size: 1.4rem;
  padding: 11px;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.btnColor};
`


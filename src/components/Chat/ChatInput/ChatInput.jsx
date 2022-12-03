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
	background: #fbfbf9;
`;

export const StChatInput = styled.input`
	width: 80%;
	height: 80%;
	border: 1px solid ${props => props.theme.subTextColor};
	border-radius: 30px;
	outline: none;
	margin-left: 10%;
`;

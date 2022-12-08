import { BiSend } from "react-icons/bi";
import Stbtn from "../../common/button/Button";
import { StChatForm, StChatInput } from "./ChatInput.styled";

export const ChatInput = ({ message, onSubmitHandler, onChangeHandler }) => {
	return (
		<StChatForm onSubmit={onSubmitHandler}>
			<StChatInput placeholder="" value={message} onChange={onChangeHandler} />
			<Stbtn variant="chat">
				<BiSend />
			</Stbtn>
		</StChatForm>
	);
};

export default ChatInput;
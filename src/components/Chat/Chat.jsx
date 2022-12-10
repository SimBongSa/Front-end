import styled from "styled-components";
import ChatInput from "./ChatInput/ChatInput";
import ChatList from "./ChatList/ChatList";
import { getCookieToken } from "../../utils/cookie";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getChatList } from "../../redux/modules/chatSlice";
import { Outlet, useParams } from "react-router-dom";

import ChattingService from "../../StomJS/SockInstance";
const ChattingServiceKit = new ChattingService();

export const Chat = () => {
	const dispatch = useDispatch();
	const id = useParams();

	const token = getCookieToken(["access-token"]);
	const username = getCookieToken(["username"]);
	const chatList = useSelector(state => state?.chat?.chatList);

	const [chatLog, setChatLog] = useState([]);
	const [receiveMsg, setReceiveMsg] = useState("");
	const [message, setMessage] = useState("");

	ChattingServiceKit.onConnect(`/topic/greetings/${id.id}`, {}, newMessage => {
		setReceiveMsg(newMessage);
	});

	useEffect(() => {
		dispatch(__getChatList());
		setChatLog([receiveMsg]);
	}, [dispatch, setChatLog]);

	const onSubmitHandler = e => {
		if (message) {
			e.preventDefault();
			ChattingServiceKit.sendMessage({
				action: "MESSAGE",
				userName: username,
				chatRoomId: id.id,
				content: message,
				Authorization: token,
			});
			setMessage("");
		}
	};

	const onChangeHandler = useCallback(e => {
		setMessage(e.target.value);
	}, []);

	useEffect(() => {
		return () => {
			ChattingServiceKit.onDisconnect();
		};
	}, []);

	return (
		<StChatContainer>
			<ChatList chatList={chatList} />
			<StChatContentWrap>
				<Outlet context={{ chatLog, setChatLog, receiveMsg, setReceiveMsg }} />
				{id.id ? (
					<ChatInput
						message={message}
						onSubmitHandler={onSubmitHandler}
						onChangeHandler={onChangeHandler}
					/>
				) : null}
			</StChatContentWrap>
		</StChatContainer>
	);
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
`;

export const StChatContentWrap = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 75%;
`;

import sockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { getCookieToken } from "../utils/cookie";
const token = getCookieToken(["access-token"]);

class ChattingService {
	socket = new sockJS(`${process.env.REACT_APP_SERVER}/gs-guide-websocket`);
	stompClient = Stomp.over(this.socket);
	roomId = "";

	constructor(chatRoomId) {
		this.chatRoomId = chatRoomId;
	}

	// 웹소켓 연결 요청 & 구독 요청
	onConnect = (
		roomAddress = `/topic/greetings/${this.chatRoomId}`,
		headers = {},
		callback = () => {}
	) => {
		let newMessage = "";
		this.stompClient.debug = function (str) {};
		this.stompClient.connect(headers, frame => {
			this.stompClient.subscribe(
				roomAddress,
				data => {
					newMessage = JSON.parse(data.body);
					callback(newMessage);
				},
				{
					Authorization: token,
				}
			);
		});
		return newMessage;
	};

	sendMessage = messageObject => {
		this.stompClient.send(
			`/app/hello/${messageObject.chatRoomId}`,
			{},
			JSON.stringify(messageObject)
		);
	};

	// receiveMessage = () => {};

	onDisconnect = () => {
		this.stompClient.disconnect();
	};
}

export default ChattingService;

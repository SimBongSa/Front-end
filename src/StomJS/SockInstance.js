import sockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

class ChattingService {
  socket = new sockJS(`${process.env.REACT_APP_SERVER}/gs-guide-websocket`);
  stompClient = Stomp.over(this.socket);
  roomId = 1;

  // 방 id 받기

  receiveRoomId = (roomId) => {
    this.roomId = roomId;
  };
  // 웹소켓 연결 요청 & 구독 요청

  onConnect = (
    roomAddress = '/topic/greetings/1',
    headers = {},
    callback = () => {}
  ) => {
    let newMessage = '';
    // headers에 {} 인증요청 집어 넣기
    this.stompClient.connect(headers, () => {
      console.log('연결 성공');
      this.stompClient.subscribe(roomAddress, (data) => {
        newMessage = JSON.parse(data.body);
        // 연결 성공시 발동시킬 콜백 넣기
        // 주로 메세지를 받는 로직을 여기에 넣는다
        // 리렌더링
        callback(newMessage);
      });
    });
    return newMessage;
  };

  sendMessage = (messageObject, headers = {}) => {
    this.stompClient.send('/app/hello', {}, JSON.stringify(messageObject));
    // this.stompClient.send('/app/hello', {}, messageObject);
  };

  receiveMessage = () => {};

  onDisconnect = () => {
    this.stompClient.disconnect();
    console.log('disconnected');
  };
}

export default ChattingService;
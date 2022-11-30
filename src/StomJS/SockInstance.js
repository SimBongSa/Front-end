import sockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { getCookieToken } from '../utils/cookie';

const token = getCookieToken(['access-token'])

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
    this.stompClient.connect(headers, (frame) => {
      console.log('연결 성공', frame);
      this.stompClient.subscribe(roomAddress, (data) => {
        newMessage = JSON.parse(data.body);
        callback(newMessage);
      }, {
        Authorization: token
      });
    });
    return newMessage;
  };

  sendMessage = (messageObject) => {
    this.stompClient.send('/app/hello/1', {}, JSON.stringify(messageObject));
  };

  // receiveMessage = () => {};

  onDisconnect = () => {
    this.stompClient.disconnect();
    console.log('disconnected');
  };
}

export default ChattingService;
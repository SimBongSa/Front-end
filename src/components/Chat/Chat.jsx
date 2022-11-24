import { useEffect, useState } from "react";
import ChattingService from "../../StomJS/SockInstance";
import { getCookieToken } from "../../utils/cookie";

const ChattingServiceKit = new ChattingService();

export const Chat = () => {

  const token = getCookieToken(["access-token"]);
  const [chatLog, setChatLog] = useState([]);
  const [receiveMsg, setReveiveMsg] = useState();

  const [message, setMessage] = useState('');
  console.log(message)

  ChattingServiceKit.onConnect('topic/greetings/1', (newMessage) => {
    setReveiveMsg(newMessage.content)
  })

  useEffect(() => {
    setChatLog([...chatLog, receiveMsg]);
  }, [setChatLog, receiveMsg]);

  console.log("@@받은 메시지 => ",receiveMsg)

  const submitHandler = (e) => {
    e.preventDefault();
    ChattingServiceKit.sendMessage({
      action: 'MESSAGE',
      chatRoomId: 8,
      userName: "test",
      content: message,
      Authorization: token
    });
    setMessage('');
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }

  useEffect(() => {
    return () => {
      ChattingServiceKit.onDisconnect();
    }
  }, []);

  return (
    <div>
      <div>
        여기 메시지 뜰거임
        <hr/>
        {
          chatLog !== 0 &&
            chatLog.map((item, idx) => {
              return <h4 key={idx}>{ item }</h4>
            })
        }
      </div>
      <form onSubmit={submitHandler}>
        <input 
          placeholder="소켓" 
          value={message}
          onChange={onChangeHandler}
        />
        <button>메시지 전송</button>
      </form>
    </div>
  )
};
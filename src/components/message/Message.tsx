import MessageHead from './MessageHead';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';
import { useState } from 'react';

type Message = {
  id: number;
  msg: string;
  user: boolean;
}

const Message = () => {
  const [messages, setMessages] = useState([
    { id: 1, msg: 'First Message changes...', user: true },
    { id: 2, msg: 'Second Here message.', user: false },
    { id: 3, msg: 'Some quetion here?', user: true },
    {
      id: 4,
      msg:
        "Here some answer with ilaboration of indepth and it keeps going on it's long text not actuallylol.",
      user: false,
    },
    { id: 5, msg: 'Some Argument', user: false },
    { id: 6, msg: 'and some short answer with the follow up.', user: true },
    { id: 7, msg: 'Concluding the discussion', user: false },
    { id: 8, msg: 'See you', user: true },
    { id: 9, msg: 'Ok See you!', user: true },
  ]);

  const addMsg = (msg: Message) => {
    setMessages((oldMessages: Message[]) => (oldMessages = [...oldMessages, msg]));
  };

  return (
    <>
      <div className="message-container">
        <div className="message-head">
          <MessageHead />
        </div>
        <div className="message-body">
          <MessageBody messages={messages} />
        </div>
        <div className="message-input">
          <MessageInput addMsg={addMsg} />
        </div>
      </div>

      <style jsx>
        {`
          .message-container {
            display: flex;
            flex-direction: column;
            position: relative;
            height: 100vh;
          }
          .message-head {
            position: fixed;
            height: 50px;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            z-index: 100;
          }
          .message-body {
            flex: 1;
            overflow-y: scroll;
            overflow-x: hidde;
            margin-top: 50px;
          }
          .message-input {
            position: absolute;
            height: 50px;
            width: 100%;
            bottom: 0px;
            z-index: 200;
            background: #fff;
            margin-right: 500px;
          }
        `}
      </style>
    </>
  );
};

export default Message;

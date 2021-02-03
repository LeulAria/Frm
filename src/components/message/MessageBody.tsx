import MessageInput from './MessageInput';
import MessageBox from './MessageBox';
import { useState } from 'react';

type Message = {
  id: number;
  msg: string;
  user: boolean;
}

type Props = {
  messages: Message[]
}

const MessageBody = ({ messages }: Props) => {
  
  return (
    <>
      <div className="message-body-container">
        <div className="message-body-texts">

          {messages.map((m: any) => {
            return m.user ? <MessageBox key={m.id} val={m.msg}/> : <MessageBox key={m.id} pos="right" val={m.msg} />;
          })}

        </div>
      </div>

      <style jsx>
        {`
          .message-body-container {
            padding: 0px 2rem;
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 60px);
            margin-top: 20px;
            margin-bottom: 250px;
          }
          .message-body-texts {
            flex: 1;
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default MessageBody;

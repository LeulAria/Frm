import React from 'react';
import MessageHead from './MessageHead';
import MessageBody from './MessageBody';
import MessageInput from './MessageInput';

const Message = () => {
  return (
    <>
      <div className="message-container">
        <div className="message-head">
          <MessageHead />
        </div>
        <div className="message-body">
          <MessageBody />
        </div>
        <div className="message-input">
          <MessageInput />
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

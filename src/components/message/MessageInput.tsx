import { useState } from 'react';
import { Send } from 'react-feather';

type Message = {
  id: number;
  msg: string;
  user: boolean;
};
type Props = {
  addMsg: (msg: Message) => void;
};

const MessageInput = ({ addMsg }: Props) => {
  const [msg, setMsg] = useState('');

  return (
    <>
      <div className="msg-input">
        <input
          className="input-text"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <div className="send-icon">
          <Send
            onClick={() => {
              console.log('here...')
              addMsg({ id: Math.random(), msg, user: true })
              setMsg('')
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .msg-input {
          width: 80%;
          height: 40px;
          margin: auto;
          position: relative;
        }
        .input-text {
          width: 100%;
          height: 100%;
          font-size: .8rem;
          padding: 0 50px 0 1rem;
          border: none !important;
          border-radius: 5px;
          border: 1px solid #ddd !important;
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
          color: #333;
        }
        .send-icon {
          position: absolute;
          right: 20px;
          top: 8px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MessageInput;

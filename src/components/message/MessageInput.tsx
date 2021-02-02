import { Send } from 'react-feather';

const MessageInput = () => {
  return (
    <>
      <div className="msg-input">
        <input className="input-text" type="text" />
        <div className="send-icon">
          <Send />
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
          font-size: 1rem;
          padding: 0 50px 0 1rem;
          border: none !important;
          border: 1px solid #999 !important;
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

type Props = {
  pos?: string;
};

const MessageBox = ({ pos }: Props) => {
  return (
    <>
      <div className="message-text">
        {pos == 'right' ? (
          <p className="msg-text msg-l">
            This is the message and i love it so much so much
            <span className="msg-time">20:00</span>
          </p>
        ) : (
          <p className="msg-text msg-r">
            Second Message changes...
            <span className="msg-time">20:00</span>
          </p>
        )}
      </div>

      <style jsx>{`
        .message-text {
          display: flex;
        }
        .msg-text {
          width: 50vw;
					color: #333;
					max-width: 300px;
          padding: 10px 1.3rem;
          font-size: 0.8rem;
          border-radius: 15px;
          position: relative;
        }
        .msg-l {
					margin: 1rem auto 1rem 20%;
          border: 1px solid #eaeaea;
        }
        .msg-r {
					margin: 1rem 20% 1rem auto;
					justify-self: center;
					background: #78B;
					color: #fff;
        }
        .msg-time {
          position: absolute;
          bottom: -20px;
          font-size: 0.7rem;
          color: #777;
          font-weight: 500;
        }
        .msg-l > .msg-time {
          right: 1rem;
        }
        .msg-r > .msg-time {
          left: 1rem;
        }
        .message-body-input {
          height: 50px;
          border: 1px solid #333;
        }
        .text-container {
          display: flex;
          border: 1px solid #333;
        }
      `}</style>
    </>
  );
};

export default MessageBox;

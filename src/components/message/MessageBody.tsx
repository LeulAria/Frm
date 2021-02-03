import MessageInput from './MessageInput';
import MessageBox from './MessageBox';

const MessageBody = () => {

  return (
    <>
      <div className="message-body-container">
        <div className="message-body-texts">

          {[...Array(10).keys()].map((m: any) => {
            return m % 2 == 0 ? <MessageBox /> : <MessageBox pos="right" />;
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

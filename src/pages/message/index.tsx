import Message from '@/components/message/Message';
import NoMessage from '@/components/NoMessage';
import { useState } from 'react';
import ContactList from '../../components/contact/ContactList';

const index = () => {
  // const { gettitle } = useContext(AppContext) as ContextType;

  const [showMsg, setShowmsg] = useState(false);

  const toggleShowMsg = () => {
    setShowmsg((old: boolean) => (old = !old));
  };

  return (
    <>
      <div className="message">
        <div className="message-contactlist-block">
          <ContactList toggleShowMsg={toggleShowMsg} />
        </div>
        <div className="message-body-block">
          {showMsg ? <Message /> : <NoMessage />}
        </div>
      </div>
      <style jsx>
        {`
          .message {
            display: flex;
          }
          .message-contactlist-block {
            width: 300px;
            max-width: 400px;
            max-height: 100vh;
            min-height: 100vh;
          }
          .message-body-block {
            flex: 1;
          }
          @media (max-width: 750px) {
            .message,
            .message-body-block {
              display: block;
            }
            .message-contactlist-block {
              position: absolute;
            }
          }
        `}
      </style>
    </>
  );
};

export default index;

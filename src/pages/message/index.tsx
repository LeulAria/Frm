import Message from '@/components/message/Message';
import React from 'react';
import ContactList from '../../components/contact/ContactList';

const index = () => {
  return (
    <>
      <div className="message">
        <div className="message-contactlist-block">
          <ContactList />
        </div>
        <div className="message-body-block">
          <Message />
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
            .message, .message-body-block {
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

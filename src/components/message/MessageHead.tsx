import React from 'react';
import Avatar from '../Avatar';

const MessageHead = () => {
  return (
    <>
      <div className="message-header">
        <div className="message-list--header">
          <Avatar />
          <div className="message-user">
            <h3 className="message-user-name">Ariana Grande</h3>
            <p className="message-user-status">online now</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .message-header {
          width: 100%;
          height: 51px;
          display: flex;
          border-bottom: 1px solid #eaeaea;
        }
        .message-list--header {
          position: -webkit-sticky;
          position: sticky;
          background: #fff;
          display: flex;
          align-items: center;
          padding: 0 10%;
        }
        
        .message-list--container {
          display: flex;
          flex-direction: column;
          min-width: 100%;
        }
        .message-user {
          margin-left: 1rem;
        }

        .message-user-name {
          margin:0;
          margin-top: 5px;
          line-height: 10px;
          font-size: 1rem;
          font-weight: 600;
        }
        .message-user-status {
          margin: 0;
          font-size: .7rem;
          color: #777;
        }
      `}</style>
    </>
  );
};

export default MessageHead;

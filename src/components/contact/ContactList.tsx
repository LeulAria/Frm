import { useState } from 'react';
import Contact from './Contact';
import { MoreVertical } from 'react-feather'

const ContactList = () => {
  const [showInMob, setShowInMob] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowInMob((oldVal) => !oldVal)}
        className="mob-icon"
      >
        <MoreVertical />
      </div>
      <div className="contact-list">
        <div className="contact-list--header">
          <h3 className="contact-list--title">Messages</h3>
        </div>
        <div className="contact-list--container">
          {[...Array(5).keys()].map((a) => (
            <Contact />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .contact-list {
            position: relative;
            height: 100vh;
            overflow-y: auto;
            overflow-x: hidden;
            border: 1px solid #eaeaea;
          }

          .contact-list--header {
            position: fixed;
            background: #fff;
            top: 0px;
            left: 0;
            width: 300px;
            height: 50px;
            border: 1px solid #eaeaea;
            z-index: 200;
          }

          .contact-list--container {
            display: flex;
            flex-direction: column;
            min-width: 100%;
            margin-top: 50px;
          }

          .contact-list--title {
            text-align: center;
            margin: 10px;
          }

          .mob-icon {
            display: none;
          }

          @media (max-width: 750px) {
            .contact-list--header {
              position: sticky;
            }
            .contact-list--container {
              margin-top: 0;
            }
            .contact-list {
              position: absolute;
              top: 0;
              left: ${showInMob ? '0px' : '-1000px'};
              animation: ${showInMob ? 'show 0.4s ease-out' : 'none'};
              transition: all 0.5s;
              background: #fff;
              z-index: 1000;
            }
            .mob-icon {
              position: absolute;
              display: block !important;
              display: absolute !important;
              top: 15px;
              left: 10px;
              z-index: 2000;
            }
          }

          @keyframes show {
            0% {
              left: -500px;
              opacity: 0;
            }
            100% {
              left: 0px;
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactList;

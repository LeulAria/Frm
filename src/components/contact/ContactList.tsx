import { useState } from 'react';
import Contact from './Contact';

const ContactList = () => {
  const [showInMob, setShowInMob] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowInMob((oldVal) => !oldVal)}
        className="mob-icon"
      >
        ---
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
            max-height: 100vh;
            min-height: 100vh;
            width: 300px;
            max-width: 400px;
            overflow: auto;
            border: 1px solid #eaeaea;
          }

          .contact-list--header {
            position: -webkit-sticky;
            position: sticky;
            background: #fff;
            top: 0px;
            left: 0;
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #eaeaea;
          }

          .contact-list--container {
            display: flex;
            flex-direction: column;
            min-width: 100%;
          }

          .contact-list--title {
            text-align: center;
            margin: 10px;
          }

          .mob-icon {
            display: none;
          }

          @media (max-width: 600px) {
            .contact-list {
              position: absolute;
              left: ${showInMob ? '0px' : '-1000px'};
              animation: ${showInMob ? 'show 0.4s ease-out' : 'none'};
              transition: all 0.5s;
              background: #fff;
            }
            .mob-icon {
              display: block !important;
              display: absolute !important;
              top: 50px;
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

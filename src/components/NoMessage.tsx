import React from 'react';
import { Zap } from 'react-feather';

const NoMessage = () => {
  return (
    <>
      <div className="no-message-container">
        <h3>
          Click a chat to start messaging <Zap />
        </h3>
      </div>

      <style jsx>
        {`
			.no-message-container {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.no-message-container > h3 {
				margin-top: -15vh;
			}
		`}
      </style>
    </>
  );
};

export default NoMessage;

import React from 'react';

const Avatar = () => {
  return (
    <>
      <div className="avatar"></div>
      <style jsx>
        {`
          .avatar {
            width: 40px;
            height: 40px;
            background: grey;
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
};

export default Avatar;

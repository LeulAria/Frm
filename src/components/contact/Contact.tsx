import Avatar from '../Avatar';

const Contact = () => {
  return (
    <>
      <div className="contact-card">
        <Avatar />
        <p className="contact--detail">
          <h5 className="contact--user-name">Aria Grande</h5>
          <p className="contact-message-last">Lorem ipsum dolor sit.</p>
        </p>
        <small className="contact--message-time">22:04</small>
      </div>

      <style jsx>
        {`
          .contact-card {
            width: 100%;
            margin: 5px 0;
            padding: 5px 1rem;
            display: flex;
            align-items: center;
            justify-contecnt: space-evenly;
          }
          .contact--detail {
            margin: 0 1rem;
            flex: 1;
          }
          .contact--user-name {
            margin: 0;
            color: #444;
          }
          .contact--message-time, .contact-message-last {
            margin: 0;
            font-size: .71rem;
            color: #777;
          }
        `}
      </style>
    </>
  );
};

export default Contact;

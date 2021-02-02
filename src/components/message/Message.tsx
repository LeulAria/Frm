import React from 'react'
import MessageHead from './MessageHead';
import MessageInput from './MessageInput';
import MessageBody from './MessageBody';

const Message = () => {
    return (
        <div style={{marginLeft: '3rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <MessageHead />
            <MessageBody />
            <MessageInput />
        </div>
    )
}

export default Message

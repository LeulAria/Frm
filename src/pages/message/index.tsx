import Message from '@/components/message/Message';
import React from 'react'
import ContactList from '../../components/contact/ContactList';

const index = () => {
    return (
        <div style={{display: 'flex'}}>
            <ContactList />
            <Message />
        </div>
    )
}

export default index

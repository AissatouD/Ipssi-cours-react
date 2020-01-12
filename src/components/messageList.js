
import React from 'react';
import MessageItem  from './messageItem';
import { useSelector } from 'react-redux';


const MessageList = () => {
    const messages = useSelector(state => state.messages.messages);

    console.log(messages);

    if(messages){
        return (
            <div>
                <ul>
                    {messages.map((message, i) => {
                        return <MessageItem key={i} index={i} message={message} />;
                    })}
                </ul>
            </div>
        );

    }
    else {
        return (
            <div className='no-msg'>
                <p>Pas de messages.</p>
            </div>
        )

    }

};

export default MessageList;

import React, {useState} from "react";
import PropTypes from 'prop-types';
import MessageList from "./messageList";
import MessageBar from "./messageBar";
//import styled from "styled-components";



const styleChat = {
    borderRadius: 10,
    fontFamily: 'Montserrat',
    width: 400,
    backgroundColor: '#a094b7',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
};

const Chat = () => {
    const [messages, setMessages] = useState(['']);
    const handleMessageSubmit = messages => {
        const newMessage = { message: messages, username: "Aiss" };
        console.log(messages);
        setMessages([...messages, newMessage]);

    };

    return (
        <div style={styleChat}>
            <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 40 }}>Mon Chat <span role={"img"} aria-label={""} >🐰🐹</span></div>
            <MessageList messages={messages} />
            <MessageBar handleMessageSubmit={handleMessageSubmit}/>
        </div>
    );
};

MessageBar.propTypes = {
    handleMessageSubmit: PropTypes.func.isRequired
};

/*const mapDispatchToProps = dispatch => {
    return {
        getMessages: dispatch(getMessages())
    }
};*/

export default Chat;

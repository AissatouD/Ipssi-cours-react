import React from 'react';
//import PropTypes from 'prop-types';
//import Emoji from 'react-emoji-render';
//import styled from 'styled-components';

const MessageItem = props => {
    console.log(props);
    console.log(props.message.messages);

    return (
        <li
            style={{
                marginBottom: 10,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10
            }}
        >
            <small>{props.message.username}</small>
            <p>{props.message.messages}</p>

        </li>

    );
};

export default MessageItem;

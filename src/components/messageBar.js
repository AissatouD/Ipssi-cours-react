import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../actions/addMessage";


const inputStyle = {
    borderRadius: 10,
    border: "none",
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1
};
const buttonStyle = {
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 20,
    color: "#ede5f4",
    fontWeight: "bold",
    padding: 10,
    flexGrow: 1,
    border: "3px solid #c48b9f",
    backgroundColor: "transparent"
};


const MessageBar = () => {
    const [message, setMessage ]= useState('');

    const dispatch = useDispatch();
    const UserName = useSelector(state => state.login.accounts.slice(-1)[0]);

    // const loading = useSelector(state=> state.message.loading);

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if(message){
            dispatch(addMessage({message: message}, UserName.accounts));
            setMessage('');

        }

    };

      /*  const handleClick = () => {
        props.handleMessageSubmit(message);
        setMessage('');


    };*/
    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Envoyer</button>
             </form>

    )
};

/*MessageBar.propTypes = {
    handleMessageSubmit: PropTypes.func.isRequired
};*/

export default MessageBar;

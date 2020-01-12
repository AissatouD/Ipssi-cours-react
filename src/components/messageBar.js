import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../actions/addMessage";


const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color:  "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

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
                <Input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                />
                <Button type="submit">Envoyer</Button>
             </form>

    )
};

/*MessageBar.propTypes = {
    handleMessageSubmit: PropTypes.func.isRequired
};*/

export default MessageBar;

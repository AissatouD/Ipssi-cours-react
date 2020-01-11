import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from "react-router";
import { useDispatch } from 'react-redux'
import login from '../../reducers/login.js'
//import styled from 'styled-components';



const Login = (props) => {

    let history = useHistory();
    const [username, setUsername ]= useState('');
    const dispatch = useDispatch();

    const handleChange = e=> {
        setUsername(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(username){
            dispatch(login({username: username}));
            setUsername('');
            history.push("/chat");

        }
    };

    return (
        <div id='Login'>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                placeholder="Votre username"
                onChange={handleChange}
                />

            <button
                type="submit">
                Envoyer
            </button>
            </form>
        </div>
    )
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default Login;

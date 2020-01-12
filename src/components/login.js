import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import {useHistory} from "react-router";
import { useDispatch } from 'react-redux'
import addUsername from '../actions/addUsername.js'
import styled from 'styled-components';

const inputStyle = {
    borderRadius: 10,
    border: "3px solid #a094b7",
    fontSize: 16,
    padding: 10,
    marginRight: 10,
    flexGrow: 1

};

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "palevioletred" ;
  color:  "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;




const Login = () => {

    let history = useHistory();
    const [username, setUsername ]= useState('');
    const dispatch = useDispatch();

    const handleChange = e=> {
        setUsername(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(username){
            dispatch(addUsername({username: username}));
            console.log(username);
            history.push("/chat");

        }
    };

    return (
        <div id='Login'>
            <form onSubmit={handleSubmit}>
            <input
                style={inputStyle}
                type="text"
                name="username"
                value={username}
                placeholder="Votre username"
                onChange={handleChange}
                />

            <Button
                type="submit">
                Envoyer
            </Button>
            </form>
        </div>
    )
};

/*Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};*/

export default Login;

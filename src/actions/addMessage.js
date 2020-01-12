import * as action from '../actions/actionType';

export const addMessage = (message, username)=> {
    return {
        type: action.ADD_MESSAGE_ACTION,
        message: message,
        username: username
    };
};




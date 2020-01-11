import * as action from '../actions/actionType';

 export const removeMessage = index => {
    return {
        type: action.REMOVE_MESSAGE_SUCCESS_ACTION,
        index
    };

};

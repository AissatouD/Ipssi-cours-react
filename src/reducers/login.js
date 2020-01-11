import { LOGIN }from '../actions/login';

const INITIAL_STATE = {
    username: null
};

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                username: action.username
            }
        default:
            return state;
    }

};

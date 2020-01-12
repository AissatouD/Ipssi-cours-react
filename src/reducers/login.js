
const INITIAL_STATE = { accounts: [] };

 const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_USERNAME" :
            return {
                accounts: [
                    ...state.accounts,
                    {accounts: action.username}

                ]
            };

        default:
            return state;
    }

};

 export default login;

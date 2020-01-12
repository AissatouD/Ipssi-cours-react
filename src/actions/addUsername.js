const addUsername = (account) => {

    return {
        type: 'ADD_USERNAME',
        username: account.username
    };
};
export default addUsername;

/*import * as action from './actionType';
import axios from "axios";

export const loadMessages = () => {
    return dispatch => {
        dispatch({ type: action.LOAD_MESSAGES_PENDING_ACTION});

        return axios
            .get('https://www.mocky.io/v2/5185415ba171ea3a00704eed')
            .then( response => {
                dispatch({
                    type: action.LOAD_MESSAGES_SUCCES_ACTION,
                    messages: response.data.messages
                })

                    .catch(error => {
                        dispatch({
                            type: action.LOAD_MESSAGES_ERROR_ACTION, error: error
                        })

                    });

            });
    };
};
*/

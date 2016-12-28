export const API_URL = 'http://localhost:3000/api';
import axios from 'axios';

import errorHandler from '../error';
export const RegistrationActions = {
    REGISTER_USER: 'register_user',
};

const registration = {
    registerUser: ({firstName, lastName, email}) => (dispatch) => {
        axios.post(`${API_URL}/user/create-new-user`, {firstName, lastName, email}
        )
        .then(response => {
            dispatch({
                type: RegistrationActions.REGISTER_USER,
                payload: response.data
            });
        })
        .catch(response => dispatch(errorHandler(response.data.error)));
    }
};
export default registration;

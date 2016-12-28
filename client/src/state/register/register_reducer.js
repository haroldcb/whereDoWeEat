import {RegistrationActions} from './actions';

const INITIAL_STATE = { message: ''};

const registerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RegistrationActions.REGISTER_USER:
            return {...state, message: action.payload.message};
    }
    return state;
};

export default registerReducer;
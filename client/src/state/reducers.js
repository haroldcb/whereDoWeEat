import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './register/register_reducer';

const rootReducer = combineReducers({
    register: registerReducer,
    form: formReducer,
});

export default rootReducer;
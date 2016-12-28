import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './state/reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);


import App from './app';
import DashBoard from './components/dashboard';
import Login from './components/login';
import RegisterPage from './components/registerPage';


const DashBoardConnected = connect((state) => state)(DashBoard);
const RegisterPageConnected = connect((state) => { return {message: state.register.message}})(RegisterPage);


const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={DashBoardConnected} />
                <Route path='dashboard' component={DashBoardConnected} />
                <Route path='login' component={Login} />
                <Route path='register' component={RegisterPageConnected} />
            </Route>
        </Router>
    </Provider>
);

export default routes;
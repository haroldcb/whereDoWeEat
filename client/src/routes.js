import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import DashBoard from './components/dashboard';
import Login from './components/login';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={DashBoard} />
        <Route path='dashboard' component={DashBoard} />
        <Route path='login' component={Login} />
    </Route>
);
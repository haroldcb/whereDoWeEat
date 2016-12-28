const express = require('express');

// import controllers
const _registerController = require('./controllers/_register-controller');

module.exports = function(app) {

    const userRoutes = express.Router();

    //routes will go here
    const apiRoutes = express.Router();

    apiRoutes.use('/user', userRoutes);
    userRoutes.post('/create-new-user', _registerController.RegisterUser);

    app.use('/api', apiRoutes);
};
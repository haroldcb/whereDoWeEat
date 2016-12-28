//Load environments variables from the .env file
require('dotenv').config();

// Importing Node modules and initializing Express
const express = require('express'),
    app = express(),
    router = require('./router'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

const database = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+process.env.DB_URL+'/'+process.env.DB_NAME;

// Database Setup
mongoose.connect(database);

// Import routes to be served
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);

// Start the server
app.listen(process.env.SERVER_PORT);
console.log('Server is running on port ' + process.env.SERVER_PORT + '.');
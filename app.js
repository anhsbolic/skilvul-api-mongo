const bluebird = require('bluebird');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// import utils
const respond = require('./utils/respond');
const logger = require('./utils/logger');

// import API Routes
const setPublicRoutes = require('./routes/public');
const setPrivateRoutes = require('./routes/private');

// db start & configs
try {
    mongoose.Promise = bluebird;
    let isConnectedBefore = false;
    let connect = function () {
        mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
        });
    };
    connect();
    mongoose.connection.on('error', function () {
        logger.info('Could not connect to MongoDB');
    });
    mongoose.connection.on('disconnected', function () {
        logger.info('Lost MongoDB connection...');
        if (!isConnectedBefore) connect();
    });
    mongoose.connection.on('connected', function () {
        isConnectedBefore = true;
        logger.info('Connection established to MongoDB');
    });
    mongoose.connection.on('reconnected', function () {
        logger.info('Reconnected to MongoDB');
    });

    // Close the Mongoose connection, when receiving SIGINT
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            logger.info('Force to close the MongoDB connection');
            process.exit(0);
        });
    });
} catch (err) {
    throw err;
}

// app
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Set Routes
setPublicRoutes(app);
setPrivateRoutes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    logger.info("NOT FOUND!");
    respond.responseNotFound(res);
});

// error handler
app.use(function (err, req, res, next) {
    logger.info(err);
    respond.responseError(res);
});

// finalize
module.exports = app;

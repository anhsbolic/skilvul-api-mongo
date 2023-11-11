const express = require('express');
const inputValidation = require('../../../middlewares/inputValidation');
const controller = require('./controller');
const validation = require('./validation');

const router = express.Router();

/**
 * Register
 * @api public
 */
router.post(
    '/register',
    inputValidation(validation.register),
    controller.register
);

/**
 * Login
 * @api public
 */
router.post(
    '/login',
    inputValidation(validation.login),
    controller.login
);

module.exports = router;

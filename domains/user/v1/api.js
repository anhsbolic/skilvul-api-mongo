const express = require('express');
const inputValidation = require('../../../middlewares/inputValidation');
const controller = require('./controller');
const validation = require('./validation');

const router = express.Router();

/**
 * Get Detail Task
 * @api public
 */
router.get(
    '/:id',
    controller.detail
);

/**
 * Update One Task
 * @api public
 */
router.put(
    '/:id',
    inputValidation(validation.updateOne),
    controller.updateOne
);

module.exports = router;

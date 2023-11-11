const express = require('express');
const inputValidation = require('../../../middlewares/inputValidation');
const controller = require('./controller');
const validation = require('./validation');

const router = express.Router();

/**
 * Get List User
 * @api private
 */
router.get(
    '/',
    controller.index
);

/**
 * Get Detail User
 * @api private
 */
router.get(
    '/:id',
    controller.detail
);

/**
 * Update One User
 * @api private
 */
router.put(
    '/:id',
    inputValidation(validation.update),
    controller.updateOne
);

/**
 * Delete One User
 * @api private
 */
router.delete(
    '/:id',
    controller.deleteOne
);

/**
 * Update Status User
 * @api private
 */
router.patch(
    '/:id/status',
    inputValidation(validation.updateStatus),
    controller.updateStatus
);


module.exports = router;

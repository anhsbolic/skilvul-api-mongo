const express = require('express');
const multer = require('multer');
const inputValidation = require('../../../middlewares/inputValidation');
const controller = require('./controller');
const validation = require('./validation');

// SETUP MULTER
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

// SETUP ROUTER
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

/**
 * Upload Avatar User
 * @api private
 */
router.post(
    '/:id/avatar',
    upload.single('avatar'),
    controller.updateAvatar
);

module.exports = router;

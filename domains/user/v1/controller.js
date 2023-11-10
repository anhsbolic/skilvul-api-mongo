const errorHelper = require('../../../libraries/error');
const logger = require('../../../libraries/logger');
const respond = require('../../../libraries/respond');
const service = require('./service');

/**
 * Get Detail User
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const detail = async (req, res) => {
    try {
        const result = await service.detail(req.params.id);
        return respond.responseSuccess(res, "User retrieved successfully", result, undefined);
    } catch (e) {
        if (e.name === errorHelper.NOT_FOUND) {
            return respond.responseNotFound(res, e.message);
        }
        logger.info(e);
        return respond.responseError(res, e.statusCode, e.message);
    }
};

/**
 * Update One User
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const updateOne = async (req, res) => {
    try {
        const result = await service.updateOne(req.params.id, req.body);
        return respond.responseSuccess(res, "User updated successfully", result, undefined);
    } catch (e) {
        if (e.name === errorHelper.NOT_FOUND) {
            return respond.responseNotFound(res, e.message);
        }
        if (e.name === errorHelper.UNPROCESSABLE_ENTITY) {
            return respond.responseUnprocessableEntity(res, e.message);
        }
        logger.info(e);
        return respond.responseError(res, e.statusCode, e.message);
    }
};

module.exports = {
    detail,
    updateOne,
};

const errorHelper = require('../../../utils/error');
const logger = require('../../../utils/logger');
const respond = require('../../../utils/respond');
const service = require('./service');

/**
 * Register
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const register = async (req, res) => {
    try {
        const result = await service.register(req.body);
        return respond.responseSuccess(res, "User Registered", result, undefined);
    } catch (e) {
        if (e.name === errorHelper.BAD_REQUEST) {
            return respond.responseBadRequest(res, e.message);
        }

        logger.error(e);
        return respond.responseError(res, e.statusCode, e.message);
    }
};

/**
 * Login
 * @param {Object} req express request object
 * @param {Object} res express response object
 */
const login = async (req, res) => {
    try {
        const result = await service.login(req.body);
        return respond.responseSuccess(res, "User Logged In", result, undefined);
    } catch (e) {
        if (e.name === errorHelper.BAD_REQUEST) {
            return respond.responseBadRequest(res, e.message);
        }

        logger.error(e);
        return respond.responseError(res, e.statusCode, e.message);
    }
};

module.exports = {
    register,
    login,
};

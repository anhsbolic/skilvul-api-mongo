/**
 * CONSTANTS
 */
const BAD_REQUEST = 400;
const BAD_REQUEST_MSG = 'BAD REQUEST';
const UNAUTHORIZED = 401;
const UNAUTHORIZED_MSG = 'UNAUTHORIZED';
const FORBIDDEN = 403;
const FORBIDDEN_MSG = 'FORBIDDEN';
const NOT_FOUND = 404;
const NOT_FOUND_MSG = 'NOT FOUND';
const UNPROCESSABLE_ENTITY = 422;
const UNPROCESSABLE_ENTITY_MSG = 'UNPROCESSABLE ENTITY';
const INTERNAL_SERVER_ERROR = 500;
const INTERNAL_SERVER_ERROR_MSG = 'INTERNAL SERVER ERROR';

/**
 * Throw Bad Request Error with Message
 * @param {String} message Error Message
 */
const throwBadRequest = (message = BAD_REQUEST_MSG) => {
    let e = new Error(message);
    e.statusCode = BAD_REQUEST;

    throw e;
};

/**
 * Throw Unauthorized Error with Message
 * @param {String} message Error Message
 */
const throwUnauthorized = (message = UNAUTHORIZED_MSG) => {
    let e = new Error(message);
    e.statusCode = UNAUTHORIZED;

    throw e;
};

/**
 * Throw Forbidden Error with Message
 * @param {String} message Error Message
 */
const throwForbidden = (message = FORBIDDEN_MSG) => {
    let e = new Error(message);
    e.statusCode = FORBIDDEN;

    throw e;
};

/**
 * Throw Not Found Error with Message
 * @param {String} message Error Message
 */
const throwNotFound = (message = NOT_FOUND_MSG) => {
    let e = new Error(message);
    e.statusCode = NOT_FOUND;

    throw e;
};

/**
 * Throw Unprocessable Entity Error with Message
 * @param {String} message Error Message
 */
const throwUnprocessableEntity = (message = UNPROCESSABLE_ENTITY_MSG) => {
    let e = new Error(message);
    e.statusCode = UNPROCESSABLE_ENTITY;

    throw e;
};

/**
 * Throw Internal Server Error with Message
 * @param {String} message Error Message
 */
const throwInternalServerError = (message = INTERNAL_SERVER_ERROR_MSG) => {
    let e = new Error(message);
    e.statusCode = INTERNAL_SERVER_ERROR;

    throw e;
};

module.exports = {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    UNPROCESSABLE_ENTITY,
    INTERNAL_SERVER_ERROR,
    throwBadRequest,
    throwUnauthorized,
    throwForbidden,
    throwNotFound,
    throwUnprocessableEntity,
    throwInternalServerError,
};

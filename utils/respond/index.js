/**
 * Code : 200
 * Response : Success
 * @param {Object} res express response object
 * @param {String} msg message
 * @param {Object} data any type of data
 * @param {Object} meta additional data object
 */
const responseSuccess = (res, msg = 'Success', data, meta) => {
    res.status(200).send({
        code: 200,
        success: true,
        message: msg,
        data: data,
        meta: meta,
    });
};

/**
 * Code : 200
 * Response : Fail
 * @param {Object} res express response object
 * @param {String} msg message
 * @param {Object} data any type of data
 * @param {Object} meta additional data object
 */
const responseFail = (res, msg = 'Fail', data, meta) => {
    res.status(200).send({
        code: 200,
        success: false,
        message: msg,
        data: data,
        meta: meta,
    });
};

/**
 * Code : 201
 * Response : Data Created
 * @param {Object} res express response object
 * @param {String} msg message
 * @param {Object} data any type of data
 * @param {Object} meta additional data object
 */
const responseCreated = (res, msg = 'Data Created', data, meta) => {
    res.status(201).send({
        code: 201,
        success: true,
        message: msg,
        data: data,
        meta: meta,
    });
};

/**
 * Response Bad Request
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseBadRequest = (res, msg = 'Bad Request') => {
    res.status(400).send({
        code: 400,
        success: false,
        message: msg,
    });
};

/**
 * Response Unauthenticated
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseUnauthenticated = (res, msg = 'Unauthenticated') => {
    res.status(401).send({
        code: 401,
        success: false,
        message: msg,
    });
};

/**
 * Response Forbidden
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseForbidden = (res, msg = 'Forbidden') => {
    res.status(403).send({
        code: 403,
        success: false,
        message: msg,
    });
};

/**
 * Response Not Found
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseNotFound = (res, msg = 'Not Found') => {
    res.status(404).send({
        code: 404,
        success: false,
        message: msg,
    });
};

/**
 * Response Unprocessable Entity
 * @param {Object} res express response object
 * @param {String} msg message
 */
const responseUnprocessableEntity = (res, msg = 'Unprocessable Entity') => {
    res.status(422).send({
        code: 422,
        success: false,
        message: msg,
    });
};

/**
 * Response Error
 * @param {Object} res express response object
 * @param {Number} statusCode http status code
 * @param {String} msg message
 */
const responseError = (res, statusCode = 500, msg = 'Internal Server Error') => {
    if (process.env.NODE_ENV === 'production') {
        msg = 'Internal Server Error';
    }

    res.status(statusCode).send({
        code: statusCode,
        success: false,
        message: msg,
    });
};

module.exports = {
    responseSuccess,
    responseFail,
    responseCreated,
    responseBadRequest,
    responseUnauthenticated,
    responseForbidden,
    responseNotFound,
    responseUnprocessableEntity,
    responseError,
};

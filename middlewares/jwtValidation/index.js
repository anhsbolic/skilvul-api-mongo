const encryption = require('./../../utils/encryption');
const respond = require('./../../utils/respond');
const userRepository = require('./../../domains/user/v1/repository');

module.exports = () => {
    return async (req, res, next) => {
        // get token from Bearer
        if (!req.headers.authorization) return respond.responseUnauthenticated(res, 'Access denied. No token provided.');
        const token = req.headers.authorization.split(' ')[1];

        // validate token
        if (!token) return respond.responseUnauthenticated(res, 'Access denied. No token provided.');

        // validate jwt
        const decodedJWT = encryption.verifyJWT(token);
        if (!decodedJWT) return respond.responseUnauthenticated(res, 'Invalid token');

        // find user
        const user = await userRepository.findById(decodedJWT.user_id);
        if (!user) return respond.responseUnauthenticated(res, 'Invalid token');

        // add user to req
        req.user = user;

        // continue
        next();
    };
};

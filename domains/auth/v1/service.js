const userRepository = require('../../user/v1/repository')
const dateFormat = require('../../../utils/dateFormat');
const encryption = require('../../../utils/encryption');
const errorHelper = require('../../../utils/error');
const {USER_STATUS_ACTIVE} = require('../../user/v1/constant');

/**
 * Register
 * @param {Object} body
 */
const register = async (body) => {
    // find exist user with email
    const existUser = await userRepository.findByEmail(body.email);
    if (existUser) errorHelper.throwBadRequest(`User with email ${body.email} is already exist`);

    // registered at
    body.registered_at = dateFormat.nowUtc7();

    // status
    body.status = USER_STATUS_ACTIVE;

    // encrypt password
    body.password = encryption.encryptPassword(body.password);

    // create user
    const user = await userRepository.save(body);

    // return
    return {
        user: user
    };
};

/**
 * Login
 * @param {Object} body
 */
const login = async (body) => {
    // find exist user with email
    const user = await userRepository.findByEmail(body.email);

    // check user
    if (!user) errorHelper.throwBadRequest(`Invalid Email or Password`);

    // check password
    const isPasswordValid = encryption.comparePassword(body.password, user.password);
    if (!isPasswordValid) errorHelper.throwBadRequest(`Invalid Email or Password`);

    // generate JWT
    const payloadJWT = {
        user_id: user._id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        role: user.role,
    };
    const accessToken = encryption.generateJWT(payloadJWT);

    // return
    return {
        access_token: accessToken
    };
};

module.exports = {
    register,
    login,
};

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require("../logger");

const BCRYPT_SALT_ROUND = 10;

/**
 * Encrypt Password
 * @param {String} truePassword
 */
const encryptPassword = (truePassword) => {
    return bcrypt.hashSync(truePassword, BCRYPT_SALT_ROUND);
};

/**
 * Compare Password
 * @param {String} truePassword
 * @param {String} hashPassword
 */
const comparePassword = (truePassword, hashPassword) => {
    return bcrypt.compareSync(truePassword, hashPassword);
}

/**
 * Generate JWT Token
 * @param {Object} payload
 */
const generateJWT = (payload) => {
    return jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRED_IN,
            issuer: process.env.JWT_ISSUER,
        }
    );
}

/**
 * Verify JWT Token
 * @param {String} token
 */
const verifyJWT = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (e) {
        logger.error(e);
        return false;
    }
}

module.exports = {
    encryptPassword,
    comparePassword,
    generateJWT,
    verifyJWT,
}

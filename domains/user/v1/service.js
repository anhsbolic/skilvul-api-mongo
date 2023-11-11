const repository = require('./repository');
const errorHelper = require('../../../utils/error');

/**
 * Get Detail User
 * @param {String} id
 */
const detail = async (id) => {
    const user = await repository.findById(id);
    if (!user) errorHelper.throwNotFound("User Not Found");
    return {
        user: user
    };
};

/**
 * Update One User
 * @param {String} id
 * @param {Object} body
 */
const updateOne = async (id, body) => {
    const user = await repository.findById(id);
    if (!user) errorHelper.throwNotFound("User Not Found");
    // update user
    let updatedUser = await repository.updateOne(id, body);
    if (!updatedUser) errorHelper.throwInternalServerError("Update User Failed");

    return {
        user: updatedUser
    };
};

module.exports = {
    detail,
    updateOne,
};

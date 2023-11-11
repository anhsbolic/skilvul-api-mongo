const repository = require('./repository');
const errorHelper = require('../../../utils/error');

/**
 * Get List User
 * @param {Object} query values for filtering needs
 */
const index = async (query) => {
    // get data
    return await repository.list(query);
};

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

/**
 * Delete One User
 * @param {String} id
 * @param {Object} body
 */
const deleteOne = async (id, body) => {
    const user = await repository.findById(id);
    if (!user) errorHelper.throwNotFound("User Not Found");

    // delete user
    let deletedUser = await repository.deleteOne(id, body);
    if (!deletedUser) errorHelper.throwInternalServerError("Delete User Failed");

    return true;
};

/**
 * Update Status User
 * @param {String} id
 * @param {Object} body
 */
const updateStatus = async (id, body) => {
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
    index,
    detail,
    updateOne,
    deleteOne,
    updateStatus,
};

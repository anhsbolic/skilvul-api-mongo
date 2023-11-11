const joi = require('joi');
const {USER_STATUS_LIST} = require("./constant");

const update = joi.object({
    first_name: joi.string().allow("", null),
    last_name: joi.string().allow("", null),
    address: joi.string().allow("", null),
    phone: joi.string().allow("", null),
});

const updateStatus = joi.object({
    status: joi.string().valid(...USER_STATUS_LIST).required(),
});

module.exports = {
    update,
    updateStatus,
};

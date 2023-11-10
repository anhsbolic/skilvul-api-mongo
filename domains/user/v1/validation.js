const Joi = require('joi');

const create = Joi.object({
    description: Joi.string().required(),
});

const updateOne = Joi.object({
    description: Joi.string().allow("", null),
    status: Joi.string().allow("active", "completed", "", null),
});

module.exports = {
    create,
    updateOne,
};

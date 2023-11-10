const respond = require('./../../libraries/respond');

module.exports = (joiSchema) => {
    return async (req, res, next) => {
        const {error} = joiSchema.validate(req.body);
        if (error) return respond.responseBadRequest(res, error.details[0].message);
        next();
    };
};

const userApiV1 = require('../domains/user/v1/api');
const jwtValidation = require('../middlewares/jwtValidation');

const setPrivateRoutes = (app) => {
    // set middleware
    app.use(jwtValidation());

    // set routes
    app.use('/api/v1/users', userApiV1);
};

module.exports = setPrivateRoutes;

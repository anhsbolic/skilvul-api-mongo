const authApiV1 = require('../domains/auth/v1/api');

const setPublicRoutes = (app) => {
    app.use('/api/v1/auth', authApiV1);
};

module.exports = setPublicRoutes;

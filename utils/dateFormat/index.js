const moment = require('moment');

const nowUtc7 = () => {
    return moment().utcOffset(7);
}

module.exports = {
    nowUtc7,
}

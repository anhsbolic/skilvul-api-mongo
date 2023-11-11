const moment = require('moment');

const betweenDate = (startDate, endDate) => {
    let start = '1970-01-01 00:00:00.000';
    let end = '2100-12-30 23:59:59.999';

    if (startDate && startDate !== '') {
        start = `${startDate} 00:00:00.000`;
    }

    if (endDate && endDate !== '') {
        end = `${endDate} 23:59:59.999`;
    }

    return {
        $gte: moment(start).utc().toDate(),
        $lte: moment(end).utc().toDate(),
    };
};

const searchLike = (value) => {
    return {$regex: '.*' + value + '.*', $options: 'i'};
};

const getSort = (key, defaultKey, type, defaultType = 'asc') => {
    if (!defaultKey || defaultKey === '') {
        return null;
    }

    let sortKey = defaultKey;
    let sortType = getSortType(defaultType);

    if (key && key !== '') {
        sortKey = key;
    }

    if (type && type !== '') {
        sortType = getSortType(type);
    }

    let sort = {};
    sort[sortKey] = sortType;

    return sort;
};

const getSortType = (type = 'asc') => {
    return type.toString().toLowerCase() === 'asc' ? 1 : -1;
};

module.exports = {
    betweenDate,
    searchLike,
    getSort,
    getSortType,
};

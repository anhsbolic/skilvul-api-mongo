const {User} = require('../user');
const mongoQuery = require('../../../utils/mongoQuery');
const constant = require('./constant');

/**
 * Get List Data
 * @param {Object} params
 */
const list = async (params) => {
    // init aggregate pipelines
    let pipelines = [];

    // init filters
    let filters = [];

    // filter : status
    if (params.status && constant.USER_STATUS_LIST.includes(params.status)) {
        filters.push({status: params.status});
    }

    // filter : role
    if (params.role && constant.USER_ROLE_LIST.includes(params.role)) {
        filters.push({role: params.role});
    }

    // filter : search
    if (params.search && params.search !== "") {
        filters.push({
            $or: [
                {first_name: mongoQuery.searchLike(params.search)},
                {last_name: mongoQuery.searchLike(params.search)},
            ]
        });
    }

    // assign filters to pipelines
    if (filters.length > 0) {
        pipelines.push({$match: {$and: filters}});
    }

    // sort
    pipelines.push({
        $sort: mongoQuery.getSort(params.sort_by, 'created.at', params.sort_dir, 'desc'),
    });

    // get total user
    let total = await User.countDocuments();

    // get total filtered
    let totalFiltered = 0;
    let totalFilteredPipeline = []
    totalFilteredPipeline.push(...pipelines);
    totalFilteredPipeline.push({$count: 'total'});
    let resTotalFiltered = await User.aggregate(totalFilteredPipeline);
    if (resTotalFiltered && resTotalFiltered.length > 0) {
        totalFiltered = resTotalFiltered[0].total;
    }

    // pagination
    if (params.page && params.limit) {
        let pageVal = parseInt(params.page);
        let limitVal = parseInt(params.limit);
        let skip = (pageVal - 1) * limitVal;
        pipelines.push({$limit: skip + limitVal}, {$skip: skip});
    }

    // get data
    const data = await User.aggregate(pipelines);

    // return
    return {
        data: data,
        meta: {
            page: params.page,
            limit: params.limit,
            total: total,
            total_filtered: totalFiltered,
        },
    };
};

/**
 * Find By ID
 * @param {String} id
 */
const findById = async (id) => {
    return User.findOne({_id: id});
};

/**
 * Find By Email
 * @param {String} email
 */
const findByEmail = async (email) => {
    return User.findOne({email: email});
};

/**
 * Create New Data
 * @param {Object} data
 */
const save = async (data) => {
    let user = new User(data);
    return user.save();
};

/**
 * Update One Data with filter ID
 * @param {String} id
 * @param {Object} data
 */
const updateOne = async (id, data) => {
    return User.findOneAndUpdate({_id: id}, data, {
        returnOriginal: false,
    });
};

/**
 * Delete One Data with filter ID
 * @param {String} id
 */
const deleteOne = async (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    list,
    findById,
    findByEmail,
    save,
    updateOne,
    deleteOne,
};

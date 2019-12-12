'use strict';

const customer = require('./customer-handler/customer');


module.exports.createItem = async data => {
    const res = await customer.createItem(data);

    return res
};

module.exports.deleteDuplicateItem = async event => {
    const res = await customer.deleteDuplicateItem();

    return res
};

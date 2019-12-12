'use strict';

const customer = require('./customer-handler/customer');


module.exports.createItem = async event => {
    const res = await customer.createItem(data);

    return res
};

module.exports.deleteDuplicateItem = async event => {
    const res = await customer.deleteDuplicateItem();

    return res
};


module.exports.wasGreeted = async event => {
    const name =
        event.queryStringParameters && event.queryStringParameters.name;

    const result = await customer.wasGreeted(name);

    if (result === true) {
        return {
            statusCode: 200,
            body: 'Greet found'
        };
    } else {
        return {
            statusCode: 404,
            body: 'Greet not found'
        };
    }
};
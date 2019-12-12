'use strict';

const databaseManager = require('../customer-db-handler/customer-db-params');


module.exports.createItem = async data => {

    return await databaseManager.saveItem(data)
}

module.exports.deleteDuplicateItem = async event => {

    return await databaseManager.getAllItems();
}

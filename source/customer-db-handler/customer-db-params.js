'use strict';

var databaseManager = require('./customer-db-connector');

module.exports.saveItem = async data => {
    const post  = {
     "id": data.id,
     "pid": data.pid,
     "uid": data.uid,
     "productDetails": data.productDetails
  }
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: post
    };

    return await databaseManager.saveItem(params);
}

module.exports.getAllItems = async data => {
    const params = {
        TableName: process.env.TABLE_NAME
    };

    return await databaseManager.getAllItems(params);
}

module.exports.deleteDuplicateItems = async data => {
    const params = data

    return await databaseManager.deleteDuplicateItems(params);
}
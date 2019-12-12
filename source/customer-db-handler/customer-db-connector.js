'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'})
let dynamo = new AWS.DynamoDB.DocumentClient();
const responseHandler = require('../response-handler/response-handler')

module.exports.saveItem = async params => {
     try {
          const res =  await dynamo.put(params).promise();
          return responseHandler.itemAddSuccess()

     } catch (error) {
          return responseHandler.errorHandle(error)}
}

module.exports.getAllItems = async params => {
     try {
          const res =  await dynamo.scan(params).promise();

          return responseHandler.getItemAndDelete(res)

     }catch (error) {
          return responseHandler.errorHandle(error)}
}

module.exports.deleteDuplicateItems = async params => {
     try {

         const delDuplicate = await dynamo.batchWrite(params).promise()
         return responseHandler.deleteDuplicateSuccess()

     } catch (error) {
         return responseHandler.errorHandle(error)}
}

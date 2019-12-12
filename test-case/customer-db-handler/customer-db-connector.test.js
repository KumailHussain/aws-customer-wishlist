'use strict';

const dbConnector = require('../../source/customer-db-handler/customer-db-connector');
var saveParams  = require('../../dummy-test-input/save-db-test-params.json')
var delete_params  = require('../../dummy-test-input/delete-params.json')

describe('createItem', () => {
    test('save data to DB', async () => {
        var res = { statusCode: '201', message: 'Item Added Succesfully'}
        const mess = await dbConnector.saveItem(saveParams);
        expect(mess.statusCode).toBe(res.statusCode);
        expect(mess.message).toBe(res.message);
        });
});

describe('createItem', () => {
    test('fail save data to DB', async () => {
        var res = { statusCode: '400'}
        const mess = await dbConnector.saveItem(); //fail the call empty params
        expect(mess.statusCode).toBe(res.statusCode);
        });
});

describe('getAllItems', () => {
    test('scan all items from DB', async () => {
        var res = { statusCode: '200'}
        const params = {TableName: "customers_addList" }
        const mess = await dbConnector.getAllItems(params);
        expect(mess.statusCode).toBe(res.statusCode);
        });
});

describe('getAllItems', () => {
    test('fail to get data from db', async () => {
        var res = { statusCode: '400'}
        const params = {} //fail the call empty params
        const mess = await dbConnector.getAllItems();
        expect(mess.statusCode).toBe(res.statusCode);
        });
});

describe('deleteDuplicateItems', () => {
    test('delete items from DB', async () => {
        var res = { statusCode: '200', message: 'Item Deleted Succesfully'}
        const mess = await dbConnector.deleteDuplicateItems(delete_params);
        expect(mess.statusCode).toBe(res.statusCode);
        expect(mess.message).toBe(res.message);

        });
});

describe('deleteDuplicateItems', () => {
    test('fail to delete data from db', async () => {
        var res = { statusCode: '400'}
        const mess = await dbConnector.deleteDuplicateItems(); //fail the call empty params
        expect(mess.statusCode).toBe(res.statusCode);


        });
});

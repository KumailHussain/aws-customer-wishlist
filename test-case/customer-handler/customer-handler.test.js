'use strict';

const customer = require('../../source/customer-handler/customer');
const databaseManagerMock = require('../../source/customer-db-handler/customer-db-params');
const saveParams  = require('../../dummy-test-input/save-params.json')
const deleteParams  = require('../../dummy-test-input/delete-params.json')


describe('saveItem', () => {
    test('save the data to DB if params', () => {
        var res = { statusCode: '201', message: 'Item Added Succesfully'}
        databaseManagerMock.saveItem = jest.fn().mockReturnValue(res);

        return customer.createItem(saveParams).then(mess => {
            expect(databaseManagerMock.saveItem).toBeCalledTimes(1);
            expect(mess.statusCode).toBe(res.statusCode);
            expect(mess.message).toBe(res.message);

        });
    });
});

describe('saveItem', () => {
    test('any error resulting while saving', () => {
        var params =  {}
        var res = { statusCode: '401'}
        databaseManagerMock.saveItem = jest.fn().mockReturnValue(res);

        return customer.createItem(params).then(mess => {
            expect(databaseManagerMock.saveItem).toBeCalledTimes(1);
            expect(mess.statusCode).toBe(res.statusCode);
        });
    });
});


describe('deleteDuplicateItem', () => {
    test('delete Duplicate Data', () => {

        const res = { statusCode: '200', message: 'Item Deleted Succesfully'}
        databaseManagerMock.saveItem = jest.fn().mockReturnValue(res);

        return customer.createItem().then(mess => {
            expect(databaseManagerMock.saveItem).toBeCalledTimes(1);
            expect(mess.statusCode).toBe(res.statusCode);
            expect(mess.message).toBe(res.message);
        });
    });
});
'use strict';
const  responseHandler = require('../../source/response-handler/response-handler');
const databaseManagerMock = require('../../source/customer-db-handler/customer-db-params');
const deleteParams  = require('../../dummy-test-input/delete-params.json')
var testData  = require('../../dummy-test-input/customer-list.json')

describe('itemAddSuccess', () => {
    test('response for Item added success', () => {

        const res = responseHandler.itemAddSuccess();
        expect(res.statusCode).toBe('201');

    });
});

describe('getItemAndDelete', () => {
    test('delete the items when Duplicate data is available', () => {
        const res = { statusCode: '200', message: 'Item Deleted Succesfully'}
        databaseManagerMock.deleteDuplicateItems = jest.fn().mockReturnValue(res);

        return responseHandler.getItemAndDelete(testData).then(mess => {
            expect(databaseManagerMock.deleteDuplicateItems).toBeCalledTimes(1);
            expect(mess.statusCode).toBe(res.statusCode);
            expect(mess.message).toBe(res.message);
        });

    });
});

describe('getItemAndDelete', () => {
    test('show message when Duplicate data is not available', () => {
        const res = { statusCode: '200', message: 'There is no Duplicate Item'}
        databaseManagerMock.deleteDuplicateItems = jest.fn().mockReturnValue(res);
        testData["Items"] = []

        return responseHandler.getItemAndDelete(testData).then(mess => {
            expect(databaseManagerMock.deleteDuplicateItems).toBeCalledTimes(0);
            expect(mess.statusCode).toBe(res.statusCode);
            expect(mess.message).toBe(res.message);
        });

    });
});

describe('deleteDataHandle', () => {
    test('delete the data from DB when Duplicate data', () => {
        const res = { statusCode: '200', message: 'Item Deleted Succesfully'}
        databaseManagerMock.deleteDuplicateItems = jest.fn().mockReturnValue(res);

        return responseHandler.deleteDataHandle(deleteParams).then(mess => {
            expect(databaseManagerMock.deleteDuplicateItems).toBeCalledTimes(1);
             expect(mess.statusCode).toBe(res.statusCode);
            expect(mess.message).toBe(res.message);
        });

    });
});

describe('deleteDuplicateSuccess', () => {
    test('response for delete success', () => {
        const res = responseHandler.deleteDuplicateSuccess();
        expect(res.statusCode).toBe('200');

    });
});

describe('deleteDuplicateSuccess', () => {
    test('response for error handling', () => {
        const res = responseHandler.errorHandle();
        expect(res.statusCode).toBe('400');

    });
});
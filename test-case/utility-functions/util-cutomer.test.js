
'use strict';

const  util = require('../../source/utility-functions/util-customer');
var testData  = require('../../dummy-test-input/customer-list.json')

describe('checkDuplicateItems', () => {
    test('checks duplicate when db return some data', () => {

        const res = util.findDuplicate(testData);
        expect(res.message).toBe('Duplicate Item(s) Found');
        expect(res.removeDuplicate).toBe(true);
    });


});

describe('checkDuplicateItems', () => {
    test('checks duplicate when db return empty list', () => {
        testData = {"Items": []}
        const res = util.findDuplicate(testData);
        expect(res.message).toBe('There is no Duplicate Item');
        expect(res.removeDuplicate).toBe(false);
    });


});

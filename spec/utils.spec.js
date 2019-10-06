const { expect } = require('chai');
const { createRef } = require('../utils/');

describe('createRef()', () => {
  it('given an empty array will return an empty object', () => {
    expect(createRef([], {})).to.eql({});
  });
  it('given an array with 1 item will place value of passed key in returned object', () => {
    const inputArray = [{ name: 'test_name' }];
    expect(
      createRef(inputArray, { key: 'name', value: '' })
    ).to.haveOwnProperty('test_name');
  });
  it('given 1 item will place value of value argument in the returned object ', () => {
    const inputArray = [{ name: 'test_name', id: 1 }];
    expect(createRef(inputArray, { key: 'name', value: 'id' })).to.eql({
      test_name: 1
    });
    expect(createRef(inputArray, { key: 'id', value: 'name' })).to.eql({
      1: 'test_name'
    });
  });
  it('will create reference for multiple items in array', () => {
    const inputArray = [
      { name: 'test_name', id: 1 },
      { name: 'another_test', id: 25 }
    ];
    expect(createRef(inputArray, { key: 'name', value: 'id' })).to.eql({
      test_name: 1,
      another_test: 25
    });
  });
});

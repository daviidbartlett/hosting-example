const { expect } = require('chai');
const { createRef, formatWizards } = require('../utils/');

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

describe('formatWizards', () => {
  it('given an empty array will return an empty array', () => {
    expect(formatWizards([])).to.eql([]);
  });
  it('given 1 wizard and a reference object will change name to wizard_name', () => {
    const input = [{ name: 'a' }];
    const [actual] = formatWizards(input, {});
    expect(actual.wizard_name).to.equal('a');
    expect(actual).to.not.haveOwnProperty('name');
  });
  it('given 1 wizard and reference object will swap house for house_id in object', () => {
    const input = [{ name: 'a', house: 'test' }];
    const ref = { test: 1 };
    const [actual] = formatWizards(input, ref);
    expect(actual.house_id).to.equal(1);
    expect(actual).to.not.haveOwnProperty('house');
  });
  it('will work for multiple wizards', () => {
    const input = [
      { name: 'a', house: 'test' },
      { name: 'b', house: 'another_house' }
    ];
    const ref = { test: 1, another_house: 25 };
    const actual = formatWizards(input, ref);
    const expected = [
      { wizard_name: 'a', house_id: 1 },
      { wizard_name: 'b', house_id: 25 }
    ];
    expect(actual).to.eql(expected);
  });
});

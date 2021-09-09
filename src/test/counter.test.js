const counter = require('../counter.js');

describe('Counter Function Test', () => {
  test('Return testArray length', () => {
    const testArray = [1, 3, 8, 0, 10];
    const testLength = counter(testArray);
    expect(testLength).toBe(5);
  });

  test('Return testArray length', () => {
    const testArray = [{ name: 'Rida' }, { lastName: 'Arif' }, { DOB: '07-06-98' }];
    const testLength = counter(testArray);
    expect(testLength).toBe(3);
  });
});

// tests/set-up.test.js
import {expect} from 'chai';
import {describe , it} from 'mocha';

function add(a, b) {
  return a + b;
}

// Test cases
describe('add function', () => {
  it('should return 3 when adding 1 and 2', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should return 0 when adding -1 and 1', () => {
    expect(add(-1, 1)).to.equal(0);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(add(0, 0)).to.equal(0);
  });
});

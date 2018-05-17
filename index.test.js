const assert = require('assert');
const timeManagement = require('./time');

describe('timeManagement', () => {
  describe('seconds', () => {
    it('should return seconds', () => {
      const actual = timeManagement(23);
      const expected = '23s';
      assert.equal(actual, expected);
    });
    it('should return 0 seconds if no value is passed', () => {
      const actual = timeManagement();
      const expected = '0s';
      assert.equal(actual, expected);
    });
  });
  describe('minutes', () => {
    it('should work for one digit minutes and seconds', () => {
      const actual = timeManagement(65);
      const expected = '01m05s';
      assert.equal(actual, expected);
    });
    it('should work for 2 digits minutes and seconds', () => {
      const actual = timeManagement(1414);
      const expected = '23m34s';
      assert.equal(actual, expected);
    });
    it('should return only minutes', () => {
      const actual = timeManagement(780);
      const expected = '13m';
      assert.equal(actual, expected);
    });
  });
  describe('hours', () => {
    it('should work for one digit hours, minutes and seconds', () => {
        const actual = timeManagement(3723);
        const expected = '1h02m03s';
        assert.equal(actual, expected);
    });
    it('should work for 2 digit hours, minutes and seconds', () => {
        const actual = timeManagement(40333);
        const expected = '11h12m13s';
        assert.equal(actual, expected);
    });
    it('should work for hours only', () => {
        const actual = timeManagement('7200');
        const expected = '2h';
        assert.equal(actual, expected);
    });
    it('should work for hours and minutes', () => {
        const actual = timeManagement(77820);
        const expected = '21h37m';
        assert.equal(actual, expected);
    });
    it('should work for hours and seconds', () => {
        const actual = timeManagement('10815');
        const expected = '3h15s';
        assert.equal(actual, expected);
    });
  });
});





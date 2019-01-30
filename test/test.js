const assert = require('assert');
const { calculateGrade } = require('./../src/grades');

describe('grades', () => {
  describe.only('coverage', () => {
    it('works for a perfect score', () => {
      const expected = 'A';
      const actual = calculateGrade(100);

      assert.equal(actual, expected);
    });

    it('returns Unknown on bad input', () => {
      const expected = 'Unknown';
      const actual = calculateGrade(-33);

      assert.equal(actual, expected);
    });
  });

  describe('catch all mutations mutations', () => {
    it('handles the edge case where score === cutoff', () => {
      const expected = 'A';
      const actual = calculateGrade(90);

      assert.equal(actual, expected);
    });

    it('works for B', () => {
      const expected = 'B';
      const actual = calculateGrade(84);

      assert.equal(actual, expected);
    });

    it('works for C', () => {
      const expected = 'C';
      const actual = calculateGrade(79);

      assert.equal(actual, expected);
    });

    it('works for D', () => {
      const expected = 'D';
      const actual = calculateGrade(66);

      assert.equal(actual, expected);
    });

    it('works for F', () => {
      const expected = 'F';
      const actual = calculateGrade(12);

      assert.equal(actual, expected);
    });
  });
});

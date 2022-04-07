const Bottles = require('../lib/bottles');

describe('Bottles', () => {
  test('the first verse', () => {
    const bottles = new Bottles();
    const expected =
      '99 bottles of beer on the wall, ' +
      '99 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '98 bottles of beer on the wall.\n';
    expect(bottles.verse(99)).toBe(expected);
  });
});
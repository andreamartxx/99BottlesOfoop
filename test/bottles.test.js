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

  test('another verse', () => {
    const bottles = new Bottles();
    const expected =
      '3 bottles of beer on the wall, ' +
      '3 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '2 bottles of beer on the wall.\n';
    expect(bottles.verse(3)).toBe(expected);
  });

  test('verse 2', () => {
    const bottles = new Bottles();
    const expected =
      '2 bottles of beer on the wall, ' +
      '2 bottles of beer.\n' +
      'Take one down and pass it around, ' +
      '1 bottle of beer on the wall.\n';
    expect(bottles.verse(2)).toBe(expected);
  });
});
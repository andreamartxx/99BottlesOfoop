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

  test('verse 1', () => {
    const bottles = new Bottles();
    const expected =
      '1 bottle of beer on the wall, ' +
      '1 bottle of beer.\n' +
      'Take it down and pass it around, ' +
      'no more bottles of beer on the wall.\n';
    expect(bottles.verse(1)).toBe(expected);
  });

  test('verse 0', () => {
    const bottles = new Bottles();
    const expected =
      'No more bottles of beer on the wall, ' +
      'no more bottles of beer.\n' +
      'Go to the store and buy some more, ' +
      '99 bottles of beer on the wall.\n';
    expect(bottles.verse(0)).toBe(expected);
  });

  test('couple of verses', () => {
    const bottles = new Bottles();
    const expected =
        '99 bottles of beer on the wall, ' +
        '99 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '98 bottles of beer on the wall.\n' +
        '\n' +
        '98 bottles of beer on the wall, ' +
        '98 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '97 bottles of beer on the wall.\n'
    expect(bottles.verses(99, 98)).toBe(expected);
  });

  test('the whole song', ()=>{
    const bottles = new Bottles();
    expect(bottles.song()).toBe(bottles.verses(99, 0));
  });
});
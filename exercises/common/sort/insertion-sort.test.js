const insertionSort = require('./insertion-sort');

describe('Insertion Sort', () => {
  test('should sort an array', () => {
    const arrayToSort = [9, 4, 6, 20, 170, 15, 1];
    const sortedArray = insertionSort(arrayToSort);

    expect(sortedArray).toEqual([1, 4, 6, 9, 15, 20, 170]);
  });
});
import { merge } from '../src/merge';

describe('merge function', () => {
  test('merge three sorted arrays correctly', () => {
    const a = [1, 3, 5];
    const b = [2, 4, 6];
    const c = [9, 7, 0]; 

    const result = merge(a, b, c);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test('merge with empty array', () => {
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('all arrays empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('merge with duplicates', () => {
    expect(merge([1, 2], [2, 3], [3, 2, 1])).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });
});

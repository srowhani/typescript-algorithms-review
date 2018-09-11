import { mergeSortRecursive, mergeTailRecursive } from './merge-sort';

describe('merge-sort', () => {
  it('sorts descending array to ascending', () => {
    const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSortRecursive(a)).toEqual([...a].reverse())
  })

  it('sorts an unsorted array' , () => {
    const a = [8, 6, 9, 10, 3, 5, 1, 4, 2, 7];
    expect(mergeSortRecursive(a)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  it('sorts an unsorted array with recursive merge' , () => {
    const a = [8, 6, 9, 10, 3, 5, 1, 4, 2, 7];
    expect(mergeSortRecursive(a, mergeTailRecursive)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
});
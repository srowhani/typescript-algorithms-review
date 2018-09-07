import { quickSort, partition } from './quick-sort';

describe('quick-sort', () => {
  it('sorts descending array to ascending', () => {
    const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(quickSort([...a])).toEqual([...a].reverse())
  })

  it('sorts an unsorted array' , () => {
    const a = [8, 6, 9, 10, 3, 5, 1, 4, 2, 7];
    expect(quickSort([...a])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })

  it('sorts an unsorted array' , () => {
    const a = [7, 9, 3, 1];
    expect(quickSort([...a])).toEqual([1, 3, 7, 9]);
  })

  it('partition returns correct element' , () => {
    const a = [8, 6, 9, 10, 3, 5, 1, 4, 2, 7];
    const copiedA = [...a];
    expect(partition(copiedA, 0, a.length - 1)).toEqual(3);
    expect(copiedA).toEqual([2, 1, 3, 10, 9, 5, 6, 4, 8, 7]);
  })
});
import { prim } from "@topics/datastructures/trees/mst/prim";

describe('prim', () => {
  it('works', () => {
    expect(prim({
      0: [{ start: 0, end: 2, weight: 10 }, { start: 0, end: 1, weight: 2 }],
      1: [{ start: 1, end: 0, weight: 2 }, { start: 1, end: 2, weight: 2 }],
      2: [{ start: 2, end: 0, weight: 10 }, { start: 2, end: 1, weight: 2 }],
    })).toEqual([
      { start: 0, end: 1, weight: 2 },
      { start: 1, end: 2, weight: 2 },
    ])
  })
})
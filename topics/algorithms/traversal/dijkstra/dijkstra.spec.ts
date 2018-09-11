import { dijkstras } from "@topics/algorithms/traversal/dijkstra/dijkstra";

describe('dijkstra', () => {
  it('works', () => {
    expect(dijkstras([
      [{ vertex: 1, length: 1 }],
      [{ vertex: 2, length: 2 }, { vertex: 3, length: 4 }],
      [{ vertex: 3, length: 1 }],
      [{ vertex: 1, length: 4 }, { vertex: 2, length: 1 }],
    ], 0)).toEqual({
      '0': 0,
      '1': 1,
      '2': 3,
      '3': 4
    });
  })
})
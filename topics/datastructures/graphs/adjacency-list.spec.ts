import { adjacencyListContains, bfs, adjacencyList } from "@topics/datastructures/graphs/adjacency-list";

describe('adjacency-list', () => {
  it('checks to contain edge', () => {
    expect(adjacencyListContains(0, 1)).toBeTruthy();
    expect(adjacencyListContains(0, 2)).toBeFalsy();
  })

  it('can have bfs performed on it', () => {
    expect([...bfs(adjacencyList, 0)]).toEqual([0, 1, 6, 8, 4, 9, 2, 3, 7, 5]);
  })
})
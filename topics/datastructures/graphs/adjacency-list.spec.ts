import { adjacencyListContains } from "@topics/datastructures/graphs/adjacency-list";

describe('adjacency-list', () => {
  it('checks to contain edge', () => {
    expect(adjacencyListContains(0, 1)).toBeTruthy();
    expect(adjacencyListContains(0, 2)).toBeFalsy();
  })
})
import { deflateSync } from "zlib";

/**
 * Representing a graph with adjacency lists combines the adjacency matrix with
 * an edge list.
 * 
 * For each vertex i, store an array of the vertices adjacent to it.
 * 
 * We can get to each vertex's adjacency list in constant time
 * To find out whether an edge (i, j) exists, it becomes O(d_i)
 * where d_i is the degree of vertex i
 * 
 * In the worst case, this vertex could be connected to everything but itself
 * so time complexity becomes O(|V| - 1)
 */
export type ConnectedVertexList = number[];
export const adjacencyList: { [vertexAsIndex: number]: ConnectedVertexList} = [
  [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7]
];

export function adjacencyListContains(i: number, j: number) {
  return adjacencyList[i].includes(j);
}

export function* bfs (graph: typeof adjacencyList, startingNode: number): Iterable<number> {
  const visitedNodes: { [vertexAsIndex: number]: boolean } = { [startingNode]: true};
  const queue = [ startingNode ];
  while (queue.length > 0) {
    const currentNode = queue.shift()!; // like a queue
    yield currentNode;
    const connectedVertexList = graph[currentNode];
    queue.push(...connectedVertexList.filter(v => !visitedNodes[v]));
    connectedVertexList.forEach(v => visitedNodes[v] = true);
  }
}

export function* dfs(graph: typeof adjacencyList, startingVertex: number): Iterable<number> {
  const visitedNodes: { [vertexAsIndex: number]: boolean } = {};
  function* _dfs (v: number): Iterable<number> {
    visitedNodes[v] = true;
    yield v;
    for (let adjacenctNode of graph[v]) {
      if (!visitedNodes[adjacenctNode]) {
        yield* _dfs(adjacenctNode);
      }
    }
  };
  return yield* _dfs(startingVertex);
}
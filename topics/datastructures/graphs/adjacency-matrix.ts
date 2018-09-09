/**
 * An adjacency matrix shows connections between vertices
 * by representing edges with 1's and non-edges with 0's
 * 
 * With an adjacency matrix, we can find out whether an edge
 * is present in constant time. For given vertices i,j, you can determine
 * if an edge between them exists by checking the
 * matrix at graph[i][j] === 1
 * 
 * Can represent both directed and undirected graphs
 * For an undirected graph, adjacency matrix is symmetric
 * 
 * Disadvantages?
 * It uses |V|^2 space
 */

export const sampleMatrix = [ 
  [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
];

export function edgeExists(graph: number[][], i: number, j: number) {
  return graph[i][j] === 1;
}
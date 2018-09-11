import { adjacencyList } from "@topics/datastructures/graphs/adjacency-list";

/**
 * Dijkstras algorithm is to find the shortest path between given vertices a and b
 * in a graph
 * 
 * The worst case performance for dijkstras becomes O(|E| + |V| log |V|)
 * 
 * Dijkstras original algorithm did not use a priority queue making it run
 * in O(|V|^2)
 * 
 * Runtime Complexity
 *  Depends on the implementation of data structure used to find minimal edge to u.
 *  https://en.wikipedia.org/wiki/Shortest_path_problem#Directed_graphs_with_nonnegative_weights
 *  Dijkstra's algorithm with Fibonacci heap - O(E + V log V)	- Fredman & Tarjan 1984, Fredman & Tarjan 1987
 *  Dijkstra's algorithm with list	- O(V^2) - Leyzorek et al. 1957, Dijkstra 1959
 */
export function dijkstras(graph: { vertex: number, length: number }[][], startNode: number) {
  const resultSet = [];
  const distances: { [vertex: string]: number } = {};
  
  for (let i = 0; i < graph.length; i++) {
    distances[i] = Infinity;
  }
  distances[startNode] = 0;

  const distancesExcludingResultSet = { ...distances };

  while (resultSet.length !== graph.length) {
    const { vertex } = findMinDistance(distancesExcludingResultSet);

    resultSet.push(vertex);
    delete distancesExcludingResultSet[vertex];
   
    for (let v of graph[vertex]) {
      const alternatePath = distances[vertex] + v.length

      if (distances[v.vertex] > alternatePath) {
        distancesExcludingResultSet[v.vertex] = distances[v.vertex] = alternatePath;
      }
    }
  }

  return distances;
}


export function findMinDistance(distances: {[vertex: string]: number}): { vertex: number, value: number } {
  return Object.keys(distances).reduce((bestSoFar, vertex) => {
    return distances[vertex] < bestSoFar.value
      ? { 
        vertex: Number(vertex),
        value: distances[vertex],
      } : bestSoFar;
  }, {
    vertex: -1,
    value: Infinity,
  });
}
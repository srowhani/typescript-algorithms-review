import { adjacencyList } from "@topics/datastructures/graphs/adjacency-list";

/**
 * Dijkstras algorithm is to find the shortest path between given vertices a and b
 * in a graph
 * 
 * The worst case performance for dijkstras becomes O(|E| + |V| log |V|)
 * 
 * Dijkstras original algorithm did not use a priority queue making it run
 * in O(|V|^2)
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
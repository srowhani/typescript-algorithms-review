import { IGraph, IEdge } from "@topics/datastructures/trees/mst";
import { PriorityQueue } from "@topics/datastructures/p-queue/priority-queue";

export function kruskal(graph: IGraph) {
  const g = [...graph];
  const resultSet = [];
  const sets: {[k: number]: }= {};
  
  const edgeSet = new PriorityQueue<IEdge>

  for (let i = 0; i < graph.length; i++) {
    sets[i] = new Set();
  }
  while (resultSet.length <= Object.keys(graph).length) {
    
  }
}
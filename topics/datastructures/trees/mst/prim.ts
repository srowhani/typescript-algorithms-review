import { PriorityQueue } from "@topics/datastructures/p-queue/priority-queue";
import { Nullable } from "@topics/datastructures/trees/types";
import { IGraph, IEdge, IVertex } from "@topics/datastructures/trees/mst";

export function edgesForNode (graph: IGraph, v: IVertex): IEdge[] {
  return graph[v];
}

export function prim(graph: IGraph, startVertex: number = 0): IEdge[] {
  const mst: IEdge[] = [];
  const visited: { [v: number]: boolean } = {}

  const edgesQueue = new PriorityQueue<IEdge>();
  visited[startVertex] = true;
  
  // Add all edges of start vertex to the queue.
  edgesForNode(graph, startVertex).forEach(edge => {
    edgesQueue.add(edge, edge.weight);
  });
  console.log(edgesQueue.toString());
  while (!edgesQueue.isEmpty()) {
    const nextBestEdge = edgesQueue.poll()!;
    console.log(nextBestEdge);
     // Find out the next unvisited minimal vertex to traverse.
     let nextMinVertex: Nullable<IVertex> = null;
     // set next min as the unvisited node of the next edge
     if (!visited[nextBestEdge.start]) {
       nextMinVertex = nextBestEdge.start;
     } else if (!visited[nextBestEdge.end]) {
       nextMinVertex = nextBestEdge.end;
     }
     
     if (nextMinVertex !== null) {
        mst.push(nextBestEdge);
        visited[nextMinVertex] = true;
        edgesForNode(graph, nextMinVertex).forEach(e => {
          // if we have a non visited node, go that way
          // visited is basically keeping track of what hasnt been put in
          // result set
          if (!visited[e.start] || !visited[e.end]) {
            edgesQueue.add(e, e.weight);
          }
        })
     }
  }
  return mst;
}

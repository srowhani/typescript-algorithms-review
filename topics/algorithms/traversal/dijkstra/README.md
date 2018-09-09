# Dijkstra's Algorithm

Dijkstra's algorithm is an algorithm for finding the shortest 
paths between nodes in a graph, which may represent, for example, 
road networks. 

The algorithm exists in many variants; Dijkstra's original variant 
found the shortest path between two nodes, but a more common 
variant fixes a single node as the "source" node and finds 
shortest paths from the source to all other nodes in the graph, 
producing a shortest-path tree.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

Dijkstra's algorithm to find the shortest path between `a` and `b`.
It picks the unvisited vertex with the lowest distance, 
calculates the distance through it to each unvisited neighbor, 
and updates the neighbor's distance if smaller. Mark visited
(set to red) when done with neighbors.

Dijkstras Algorithm (G,s)
  for all v in V - {s}:
    set d[v] = inf
  R = {}
  d[s] = 0
  while R != V
    find (u) not in R with smallest d[v]
    R = R union {u}
    for all v in V s.t (u,v) in E (for all vertices adjacent to u):
      let alt = d[u] + length((u,v))
      if d[v] > alt
        d[v] = alt
        
Correctness Proof
  We perform induction on the size of R.
  
  Base Case:
    R=1 -> R={s}
    d[s] = shortest path to s = 0.
    
  Inductive Hypothesis
    Lemma:
      for all x in R: d[s] = shortest path to s = 0.
  Inductive Step:
    Let u be the last vertex added to R.
    Let R' = R union {u}
    For each vertex x in R', d[x] = shortest path to x (using the inductive hypothesis)
    So by the inductive hypothesis, we have that every vertex in R' thta is not u, has the correct dist label.
    We need to show that d[u] = shortest path to u to prove that this algorithm is correct in all cases.
    
    Proof by Contradiction
      Let P be the shortest path from s->u, s.t the len(P) < d[u].
      P starts in R, and we need to retrieve u from set V-R.
      
      Lets take P, and cut out you and analyze what's happening at the step that u is appended to the shortest path.
      Denote this bastardized P as P_l. Lets call the last element in P_l, x.
       
      It should hold that len(P_l) + len(E_xu) <= len(P).
      
      By inductive hypothesis we now that d[x] is shortest s to x path.
        That is to say that d[x] <= len(P_l)
        
      u is adjacent to x, must have been updated by the algorithm.
        Therefore d[u] <= d[x] + len(E_xu)
        Since we know that the algorithm picks the most minimal edge cutting across sets R and V-R, we know u must have been picked.
        
        So the only possibility at this point is that there is a shorter path to x. Which we know is also impossible due to I.H!!!!
        
        Therefore d[u] must be the length of the shortest path from s to u.

Runtime Complexity
  Depends on the implementation of data structure used to find minimal edge to u.
  https://en.wikipedia.org/wiki/Shortest_path_problem#Directed_graphs_with_nonnegative_weights
  Dijkstra's algorithm with Fibonacci heap - O(E + V log V)	- Fredman & Tarjan 1984, Fredman & Tarjan 1987
  Dijkstra's algorithm with list	- O(V^2) - Leyzorek et al. 1957, Dijkstra 1959

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [On YouTube by Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [On YouTube by Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
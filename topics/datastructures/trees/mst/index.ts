
export type IVertex = number;

export interface IEdge {
  start: IVertex;
  end: IVertex;
  weight: number;
}

export type IGraph = IEdge[][];

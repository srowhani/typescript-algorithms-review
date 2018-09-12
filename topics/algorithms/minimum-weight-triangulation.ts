import { disconnect } from "cluster";

export interface IPoint {
  x: number,
  y: number,
};

export interface ITriangle {
  i: IPoint,
  j: IPoint,
  k: IPoint,
  cost(): number,
}

export function createPoint (x: number, y: number): IPoint {
  return {
    x,
    y,
  }
}

export function createTriangle (i: IPoint, j: IPoint, k: IPoint) {
  return {
    i,
    j,
    k,
  }
}

export function dist(p1: IPoint, p2: IPoint) {
  return Math.sqrt(
    (p1.x - p2.x) ** 2 + 
    (p1.y - p2.y) ** 2
  )
}

export function cost(points: IPoint[], i: number, j: number, k: number) {
  const p1 = points[i];
  const p2 = points[j];
  const p3 = points[k];

  return dist(p1, p2) + dist(p2, p3) + dist(p3, p1);
}

export function minimumWeightTriangulation(points: IPoint[]) {
  return function _minimumWeightTriangulation(i: number, j: number): number {
    if (j === i + 1) {
      return 0; // they're adacent
    }
    let _best = Infinity;
    for (let k = i + 1; k < j; k++) {
      const ik = _minimumWeightTriangulation(i, k);
      const kj = _minimumWeightTriangulation(k, j);
      const _cost = cost(points, i, k, j)
      _best = Math.min(_best, ik + kj + _cost);
    }
    return _best;
  }
}
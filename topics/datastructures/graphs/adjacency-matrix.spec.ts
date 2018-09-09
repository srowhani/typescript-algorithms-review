import { sampleMatrix, edgeExists } from "@topics/datastructures/graphs/adjacency-matrix";

describe('adjacency-matrix', () => {
  it('edgeExists', () => {
    expect(edgeExists(sampleMatrix, 0, 0)).toBeFalsy();
    expect(edgeExists(sampleMatrix, 0, 1)).toBeTruthy();
  });
})
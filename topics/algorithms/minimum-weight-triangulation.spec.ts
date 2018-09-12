import { minimumWeightTriangulation } from "@topics/algorithms/minimum-weight-triangulation";

describe('mwt', () => {
  it('works', () => {
    const mwt = minimumWeightTriangulation([
      {x: 0, y: 0},
      {x: 1, y: 0},
      {x: 2, y: 1},
      {x: 1, y: 2},
      {x: 0, y: 2},
    ]);
    expect(mwt(0, 4)).toEqual(15.30056307974577);
  })
})
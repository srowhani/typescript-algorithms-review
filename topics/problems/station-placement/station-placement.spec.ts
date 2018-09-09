import { createPlacementOptimizer } from "@topics/problems/station-placement/station-placement";

describe('station-placement', () => {
  it('Tests the case that all items are within 20 of each other', () => {
    const optimizer = createPlacementOptimizer({
      stations: [1, 2, 3, 4, 5],
      revenues: [1, 2, 3, 4, 5],
      minStationDistance: 20,
    });
    expect(optimizer()).toEqual(5);
  })
})
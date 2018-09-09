import { createPlacementOptimizer } from "@topics/problems/dynamic-programming/station-placement/station-placement";

describe('station-placement', () => {
  it('Tests the case that all items are within 20 of each other', () => {
    const optimizer = createPlacementOptimizer({
      stations: [1, 2, 3, 4, 5],
      revenues: [1, 2, 3, 4, 5],
      minStationDistance: 20,
    });
    expect(optimizer()).toEqual(5);
  });

  it('Handles complex scenarios', () => {
    const optimizer = createPlacementOptimizer({
      stations: [3, 10, 23, 28, 67, 86, 87, 113, 130], // 113, 87, 35, 9
      revenues: [10, 3, 22, 19, 42, 15, 14,  35,  12], //  35, 14, 42, 10,
      minStationDistance: 20,
    });
    expect(optimizer()).toEqual(123);
  })
})
import { createKnapsackOptimizer } from "@topics/problems/dynamic-programming/knapsack-problem/knapsack-problem";

describe('knapsack-problem', () => {
  it('optimizes correctly', () => {
    const optimizedValue = createKnapsackOptimizer({
      bagCapacity: 15,
      itemPool: [
        {
          value: 3,
          weight: 4,
        }, {
          value: 9,
          weight: 8,
        }, {
          value: 4,
          weight: 2,
        }, {
          value: 10,
          weight: 4,
        }, {
          value: 1,
          weight: 5,
        }, {
          value: 3,
          weight: 4,
        }, {
          value: 1,
          weight: 1,
        }
      ]
    });
    // weight = 8 + 2 + 4 + 1 = 15, value = 9 + 4 + 10 + 1 = 24
    expect(optimizedValue()).toEqual(24)
  });
});
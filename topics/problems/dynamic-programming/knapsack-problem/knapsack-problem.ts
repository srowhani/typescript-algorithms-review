import { memoize } from "@topics/problems/dynamic-programming/memoize";

/**
 * The knapsack problem is a combinatorial optimization problem where
 * the main concern is optimizing the value of the items you can
 * fit in a given container, given the container has a max capacity
 * associated with it, and each item inserted has a corresponding size
 */

export interface OptConfig {
  bagCapacity: number;
  itemPool: { value: number, weight: number}[];
}

export function createKnapsackOptimizer({ bagCapacity, itemPool }: OptConfig) {
  /**
   * Split the optimized solution params into three seperate to better memoize function calls
   */
  const optimizedSolution = memoize<number>(
    function _optimizedSolution(
      itemPoolIndex: number = 0,
      filledSoFar: number = 0,
    ): number {
      // basically marks option as not optimized, so another option will be picked
      if (filledSoFar > bagCapacity) {
        return -Infinity;
      }
    
      // stop iterating after done reading all the items, without affecting the weighting.
      if (itemPoolIndex > itemPool.length - 1) {
        return 0;
      }
      const item = itemPool[itemPoolIndex];

      return Math.max(
        optimizedSolution(itemPoolIndex + 1, filledSoFar),
        optimizedSolution(itemPoolIndex + 1, filledSoFar + item.weight) + item.value,
      );
  });
  return optimizedSolution;
}
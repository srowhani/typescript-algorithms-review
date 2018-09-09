import { memoize } from "@topics/problems/dynamic-programming/memoize";

/**
 *  * Suppose you want to place gasoline stations at various locations along a highway.
 * For simplicity, let us model the highway as the X-axis.
 * You have a list of potential locations for the gas stations x1 , x2 , . . . , xn .
 *  For each location, you have an estimated revenue r1 , r2 , . . . , rn .
 *  However, for environmental reasons, the distance between two gas stations must be at least 20 kilometers,
 *  	that is for two consecutive gas stations xi and xj, we must have xj − xi ≥ 20.
 *  Design a placement algorithm that will optimize your estimated revenue.
 *  For example, if your possible station locations are (2, 17, 24, 32, 48),
 *  	and your estimated revenue is (9, 22, 11, 2, 12),
 *    then your optimal placement is one station at location 17 and one at 48
 *    which gives you an estimated revenue of 22+12=34.
 *  It is possible to place a station at locations 2, 24, 48 however,
 *  	 that only gives you an estimated revenue of 9+11+12 = 32 which is less revenue.
 *  However, if your estimated revenue is (9, 22, 14, 2, 12), that is the revenue of location 24 is 14 instead of 11,
 *  then the optimal solution would be to place the gas stations at 2, 24, 48.
 */

export interface OptConfig {
  stations: number[],
  revenues: number[],
  minStationDistance: number,
}

export function createPlacementOptimizer ({ stations, revenues, minStationDistance }: OptConfig) {
  const optimize = memoize<number>(function _optimize(stationIndex: number = stations.length - 1): number {
    if (stationIndex < 0) {
      return 0;
    }

    if (stationIndex === 0) {
      return revenues[0];
    }

    const currentStation = stations[stationIndex];
    let currentRevenue = revenues[stationIndex];
    let _attemptCursor = undefined;
    
    // find the best in the batch
    if (currentStation - stations[0] < minStationDistance) {
      return revenues.slice(0, stationIndex + 1).reduce(
        (best, current) => Math.max(best, current),
        -Infinity
      )
    }
     
    // find closest el at least 20 away
     for (let i = stationIndex - 1; i >= 0; i--) {
      if (currentStation - stations[i] >= minStationDistance) {
        _attemptCursor = i // next possible item, given we choose to keep current station
        break;
      }
    }
    
    // optimal solution is either current revenue accumulated
    // with the best possible candidate 20 away
    // or a solution that doesnt include the current station
    return Math.max(
      optimize(_attemptCursor) + currentRevenue,
      optimize(stationIndex - 1),
    );
  });

  return optimize;
} 
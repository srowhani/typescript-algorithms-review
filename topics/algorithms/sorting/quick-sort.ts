export function swap<T>(items: T[], i: number, j: number): void {
  // console.log(`swap<T>: ${items[i]} <-> ${items[j]}`);
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}
/**
 * Partition will return the left index indicating where performing partion stopped running.
 * @param items 
 * @param leftIndex 
 * @param rightIndex 
 */
export function partition<T>(items: T[], leftIndex: number, rightIndex: number): number {
  const pivotValue = items[Math.floor((leftIndex + rightIndex) / 2)];
  // go until we pass the middle point.
  while (leftIndex <= rightIndex) {
    // single pass effort
    while (items[leftIndex] < pivotValue) {
      leftIndex += 1;
    }

    while(items[rightIndex] > pivotValue) {
      rightIndex -= 1;
    }

    if (leftIndex <= rightIndex) {
      // we swap the two elements at leftIndex, and rightIndex, and work towards the middle after.
      swap(items, leftIndex++, rightIndex--);
    }
  }
  return leftIndex;
}

/**
 * Quick sort and merge sort algorithms are based on the
 * generic divide and conquer, and thus both work pretty similarly
 * 
 * The main difference between the two is that quicksort will use something
 * called a pivot element to determine where to split the array.
 * 
 * Thus for quick sort (given the chosen pivot is trash), worst case time complexity
 * becomes O(n^2), while since in merge sort pivot el is always the middle index
 * its worst case is O(nlogn)
 * 
 * This quick sort algorithm will actually modify the array in place.
 * @param items 
 */
export function quickSort<T>(items: T[], leftIndex = 0, rightIndex = items.length - 1): T[] {
  // console.log(`quickSort<T>: items=${items}, leftIndex=${leftIndex}, rightIndex=${rightIndex}`);
  if (items.length > 1) {
    const partitionIndex = partition(items, leftIndex, rightIndex);
    // console.log(`after partition<T>: items=${items}, partitionIndex=${partitionIndex}`);

    // console.log(`${leftIndex} < ${partitionIndex - 1}`)

    if (leftIndex < partitionIndex - 1) {
      // console.log('left quickSort<T>');
      quickSort(items, leftIndex, partitionIndex - 1);
    }
    // console.log(`${rightIndex} > ${partitionIndex}`)
    if (rightIndex > partitionIndex) {
      // console.log('right quickSort<T>');
      quickSort(items, partitionIndex, rightIndex);
    }
  }
  return items;
}
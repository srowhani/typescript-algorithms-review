export function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let il = 0;
  let ir = 0;
  // If either side finishes, for-loop stops executing
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  // return sorted result with leftover items
  return [
    ...result,
    ...left.slice(il), 
    ...right.slice(ir),
  ];
}

export function mergeSortRecursive<T>(items: T[]): T[] {
  if (items.length < 2) {
    return items;
  }

  const middleIndex = Math.floor(items.length / 2);

  return merge(
    mergeSortRecursive(items.slice(0, middleIndex)),
    mergeSortRecursive(items.slice(middleIndex))
  );
};
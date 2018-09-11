export function isEmpty<T> (list: T[]) {
  return list.length === 0;
}

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

export function mergeTailRecursive<T>(left: T[], right: T[]): T[] {
  if (isEmpty(left)) {
    return right;
  }
  if (isEmpty(right)) {
    return left;
  }
  if (left[0] <= right[0]) {
    return [
      left[0],
      ...mergeTailRecursive(left.slice(1), right),
    ]
  } else {
    return [
      right[0],
      ...mergeTailRecursive(left, right.slice(1)),
    ];
  }
}

export function mergeSortRecursive<T>(items: T[], _merge: typeof merge = merge): T[] {
  if (items.length < 2) {
    return items;
  }

  const middleIndex = Math.floor(items.length / 2);

  return _merge(
    mergeSortRecursive(items.slice(0, middleIndex)),
    mergeSortRecursive(items.slice(middleIndex))
  );
};
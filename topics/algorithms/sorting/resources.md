https://visualgo.net/bn/sorting

## Mergesort

```
merge(A1, A2):
  if A1 empty:
    return A2
  if A2 empty:
    return A1
  if (A1[0] <= A2[0])
    return [A1[0], ...merge(A1[1...n-1], A2[0...n-1])]
  else
    return [A2[0], ...merge(A1[0...n-1], A2[1...n-1])]
mergesort(A):
  if A has at least 2 elements:
    merge(mergesort(A[0...n/2]), mergesort(a[n/2...n-1]))
```

Merge Sort -> 2T(n/2) + O(n) -> O(nlogn)
Selection Sort -> T(n-1) + O(n) -> O(n^2)
Binary Search -> T(n/2) + O(1) -> O(logn)
Tree Traversal -> 2T(n/2) + O(1) -> O(n)
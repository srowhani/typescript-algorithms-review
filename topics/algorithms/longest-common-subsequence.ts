export function longestCommonSubsequence(a: string, b: string) {
  const m = a.length;
  const n = b.length;

  const C = Array(m + 1).fill(
    Array(n).fill(0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      C[i + 1][j + 1] = a[i] === b[i]
      ? C[i][j] + 1
      : Math.max(
        C[i + 1][j],
        C[i][j + 1]
      );
    }
  }
  return C[m][n];
}

export function longestCommonSubsequenceRecursive(a: string, b: string) {
  return (function _lcs(i: number = a.length - 1, j: number = b.length - 1): number {
    if (i < 0 || j < 0) {
      return 0;
    }

    if (a[i] === b[j]) {
      return _lcs(i - 1, j - 1) + 1;
    }
    
    return Math.max(
      _lcs(i, j - 1),
      _lcs(i - 1, j)
    );
  })();
}
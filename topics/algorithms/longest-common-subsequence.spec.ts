import { longestCommonSubsequence, longestCommonSubsequenceRecursive } from "@topics/algorithms/longest-common-subsequence";

describe('lcs', () => {
  it('works with simple str', () => {
    expect(longestCommonSubsequence('testphrase', 'lmaophrtestphr')).toEqual(7);
    expect(longestCommonSubsequenceRecursive('testphrase', 'lmaophrtestphr')).toEqual(7);
  })

  it('works with mix chars', () => {
    expect(longestCommonSubsequence('XMJYAUZ', 'MZJAWXU')).toEqual(4);
    expect(longestCommonSubsequenceRecursive('XMJYAUZ', 'MZJAWXU')).toEqual(4);
  })
})
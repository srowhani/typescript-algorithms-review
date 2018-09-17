import { bracketsMatch } from "@topics/problems/bracket-matching/bracket-matching";

describe('bracket-matching', () => {
  it('works', () => {
    expect(bracketsMatch('[]()<>')).toBeTruthy();
    expect(bracketsMatch('<[()]>')).toBeTruthy();
    expect(bracketsMatch('<a[b(cc)]d>e')).toBeTruthy();
    expect(bracketsMatch('{{[[(())]]}}')).toBeTruthy();
    expect(bracketsMatch('{[(])}')).toBeFalsy();
  })
})
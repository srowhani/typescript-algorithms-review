import { add } from './add';
describe('curry', () => {
  it('works', () => {
    expect(+add(1)(2)(3)(1, 2, 3)).toEqual(12);
  });
});
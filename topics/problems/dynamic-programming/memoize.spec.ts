import { memoize } from './memoize';

describe('memoize', () => {
  it('works', () => {
    const fn = jest.fn(() => true);
    const f = memoize(fn)
    
    for (let i = 0; i < 5; i++) {
      f('arg')
    }

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toBeCalledWith('arg');
  })
})
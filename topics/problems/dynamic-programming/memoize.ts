
export function memoize<T>(fn: (...args: any[]) => any): (...args: any[]) => T {
  const _cache: { [ signature: string ]: T } = {};
  return function _memoizedWrapper(...args: any[]): T {
    const signature = `${fn.name}:${args.toString()}`;
    return signature in _cache
      ? _cache[signature]
      : _cache[signature] = fn(...args);
  }
}
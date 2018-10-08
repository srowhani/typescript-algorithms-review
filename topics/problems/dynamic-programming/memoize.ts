export function memoize<T>(fn: (...args: any[]) => any): (...args: any[]) => T {
  const _cache: { [ signature: string ]: T } = {};
  return function _memoizedWrapper(...args: any[]): T {
    const s = `${fn.name}:${args.toString()}`;
    return _cache[s] || (_cache[s] = fn(...args));
  }
}
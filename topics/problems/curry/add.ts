export function add<T extends number>(...args: T[]) {
  return Object.assign(add.bind(null, ...args), {
    valueOf: () => args.reduce((a, c) => a + c, 0)
  })
}
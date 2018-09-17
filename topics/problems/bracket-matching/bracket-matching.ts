import { Nullable } from "@topics/datastructures/trees/types";
import { isEmpty } from "@topics/algorithms/sorting/merge-sort";

export const bracketMap: { [k: string]: string } = {
  '{': '}',
  '[': ']',
  '(': ')',
  '<': '>',
}

export const _bracketRegexp = new RegExp(
  Object.keys(bracketMap).slice(1).reduce(
    (acc, curr) => `${acc}|\\${curr}|\\${bracketMap[curr]}`,
    '(\\{|\\}'
  ) + ')',
)

export function peek<T>(input: T[]): Nullable<T> {
  return input[input.length - 1];
}

export function isBracket(input: string): boolean {
  return _bracketRegexp.test(input);
}

export function bracketsMatch(input: string): boolean {
  const bracketStack: string[] = [];
  for (const char of input) {
    if (isBracket(char)) {
      const peekedValue = peek(bracketStack);
      if (peekedValue) {
        if (bracketMap[peekedValue] === char) {
          bracketStack.pop();
          continue;
        }
      }

      bracketStack.push(char);
    }
  }

  return isEmpty(bracketStack);
}
export const flatten = <T>(list: T[][]): T[] =>
  list.reduce((flattenList, innerList) => [...flattenList, ...innerList], []);

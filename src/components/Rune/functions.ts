export const isNumberMatch = (number: number, values: number[]): boolean =>
  values.findIndex((v) => number === v) !== -1;

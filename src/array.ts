//Array<Type> ou Type[]

export function sum(...args: Array<number>): number {
  return args.reduce((index, value) => index + value, 0);
}

export function words(...args: string[]): string {
  return args.reduce((index, value) => `${index} ${value}`);
}

export function upperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

let arrayQualquer: number[] = [1, 2, 4, 7];

const resultSum = sum(2, 4, 6);
const resultWords = words('Pato', 'Barata');
const resultUpper = upperCase('Arroz', 'Feijão');
console.log(resultUpper);

let nome: string = 'maria';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qalquer coisa');
let big: bigint = 10n;

// Arrays

const arrayNumbers: Array<number> = [1, 2, 3];
const arrayNumbers2: number[] = [1, 2, 3];

// Objects

const person: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Maria',
  idade: 30,
};

// Functions

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

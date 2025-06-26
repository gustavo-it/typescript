function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

console.log(multArgs(1, 2, 3));

const numbers: readonly number[] = [1, 2, 3, 4, 5, 6];
const numbers2: readonly ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

function multArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

console.log(multArgs(1, 2, 3));

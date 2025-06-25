function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Maria', 'Rosa', 'Joana');

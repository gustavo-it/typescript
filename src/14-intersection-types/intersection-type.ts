type HaveName = { firstName: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };
type Person = HaveName & HaveLastName & HaveAge;

const person5: Person = {
  firstName: 'Maria',
  lastName: 'Silva',
  age: 71,
};

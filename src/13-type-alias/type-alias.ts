type Age = number;
type Person = {
  firstName: string;
  age: Age;
  salary: number;
  favoriteColor?: FavoriteColor;
};
type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCmyk = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCmyk;

const person3: Person = {
  firstName: 'Maria',
  age: 25,
  salary: 1000,
  favoriteColor: 'Preto',
};

const person4: Person = {
  firstName: 'Victoria',
  age: 20,
  salary: 2000,
};

console.log(person3);

export function setFavoriteColor(person: Person, color: FavoriteColor) {
  return { ...person, favoriteColor: color };
}

const newPerson4 = setFavoriteColor(person4, 'Ciano');
console.log(newPerson4);

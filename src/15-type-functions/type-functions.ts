type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: Array<string> = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc: Array<string> = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
console.log(abc);

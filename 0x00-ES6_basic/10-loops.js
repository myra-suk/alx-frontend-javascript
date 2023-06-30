export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  for (const idx of array) {
    const value = `${appendString}${idx}`;
    myArray.push(value);
  }

  return myArray;
}

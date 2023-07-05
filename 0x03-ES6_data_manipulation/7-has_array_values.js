/* Function hasValuesFromArray
 * Returns a boolean if the array has any of the values in the array
 */

function hasValuesFromArray(set, array) {
  for (const arr of array) {
    if (!set.has(arr)) return false;
  }
  return true;
}

export default hasValuesFromArray;

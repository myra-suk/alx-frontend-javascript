/* Create a function cleanSet
 * Accepts two arguments set and StartString
 * When value starts with StartString, append the rest of the value to the set
 * Return the set
 */

function cleanSet(set, startString) {
  let result = '';

  if (!startString || !startString.length) {
    return result;
  }

  for (const element of set) {
    if (element && element.startsWith(startString)) {
      result += `${element.slice(startString.length)}-`;
    }
  }

  return result.slice(0, result.length - 1);
}

export default cleanSet;

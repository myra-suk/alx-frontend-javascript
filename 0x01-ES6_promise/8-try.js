/* Create a divideFunction that will accept two arguments: numerator (Number) and denominator
 * Throw an error if the denominator is 0
 * Otherwise, return the result of the division
 */

function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}

export default divideFunction;

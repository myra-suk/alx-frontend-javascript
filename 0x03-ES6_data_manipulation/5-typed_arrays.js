/* Create a function createInt8TypedArray
 * Returns a new ArrayBuffer with an Int8 value at a specific position.
 */

function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);

  view[position] = value;

  return new DataView(buffer);
}

export default createInt8TypedArray;

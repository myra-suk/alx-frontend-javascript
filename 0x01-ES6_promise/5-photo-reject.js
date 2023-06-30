/* Write and export the function uploadPhoto(filename)
 * The function should return the promise rejecting with an Error and a string
 */

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

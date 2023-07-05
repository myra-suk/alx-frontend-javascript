/* Create a function updateUniqueItems
 * that will return an updated map for all items with initial quantity of 1
 * if argument is not a map through an error message
 */

const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return map;
};

module.exports = updateUniqueItems;

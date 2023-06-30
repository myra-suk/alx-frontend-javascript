/* Implement a class named HolbertonClass: */

/* eslint-disable no-underscore-dangle */

class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    return this._location;
  }
}

export default HolbertonClass;

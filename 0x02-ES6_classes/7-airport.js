/* Implement a class Airport
 * Constructor attributes: name, code
 */

/* eslint-disable no-underscore-dangle */

class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  /* use symbol.toStringTag to override default toString() */
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}

export default Airport;

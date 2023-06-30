/* Implement a class Currency with constructor attributes code and name
 * Implement a getter and setter for each attribute
 * Implement a method displayFullCurrency() that displays currency code and name
 */

/* eslint-disable no-underscore-dangle */

class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* Getter and setter for code */
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  /* Getter and setter for name */
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  /* Static Method displayFullCurrency() */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;

/* Implement a class named Building
 * Implement a getter and setter for each attribute
 * The class Buidling is an abstract class
 */

/* eslint-disable no-underscore-dangle */

class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /* Getter and setter for sqft */
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}

export default Building;

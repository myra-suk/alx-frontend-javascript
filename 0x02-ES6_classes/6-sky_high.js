/* Implement a class named SkyHighBuilding which inherits from Building.
 */

/* eslint-disable no-underscore-dangle */

import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // call parent constructor with super
    this._floors = floors;
  }

  /* getter and setter */
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;

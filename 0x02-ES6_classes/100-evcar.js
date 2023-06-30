/* Implement a class Evcar that extends Car and adds the property range. */

/* eslint-disable no-underscore-dangle */

import Car from './10-car';

class Evcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* eslint-disable-next-line class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}

export default Evcar;

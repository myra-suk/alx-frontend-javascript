/* Implement a class names Pricing
 * Implement a getter and setter for each attribute
 * Implement a method displayFullPrice that returns the attributes
 * Implement a static method named convertPrice that returns the amount multiplied by the conversion
 */

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /* getter and setter for amount */
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  /* getter and setter for currency */
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  /* displayFullPrice method */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /* static method convertPrice */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;

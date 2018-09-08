export default class Card {
  get date() {
    return this._date;
  }
  get name() {
    return this._name;
  }
  constructor(name, date) {
    this._name = name;
    this._date = date;
  }
}
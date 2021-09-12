export default class Book {
  constructor() {
    this._reservations = [];
  }

  get reservations() {
    return this._reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

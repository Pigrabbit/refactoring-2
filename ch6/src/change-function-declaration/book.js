export default class Book {
  constructor() {
    this._reservations = [];
  }

  get reservations() {
    return this._reservations;
  }

  addReservation(customer) {
    this.refactor_addReservation(customer, false);
  }

  refactor_addReservation(customer, isPriority) {
    this._reservations.push(customer);
  }
}

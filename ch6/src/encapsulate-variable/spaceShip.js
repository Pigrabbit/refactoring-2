export default class Spaceship {
  constructor() {
    this._owner = null;
    this._fuel = 0;
  }

  get owner() {
    return this._owner;
  }

  set owner(arg) {
    this._owner = arg;
  }

  get fuel() {
    return this._fuel;
  }

  set fuel(arg) {
    this._fuel = arg;
  }
}
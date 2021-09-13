let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

export function defaultOwner() {
  return new Person(defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

class Person {
  constructor({ firstName, lastName }) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}

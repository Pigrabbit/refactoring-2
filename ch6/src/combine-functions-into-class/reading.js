function acquireReading() {
  return { customer: "Ivan", quantity: 10, month: 5, year: 2017 };
}

function baseRate(month, year) {
  const table = {
    2017: [0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.15, 0.15, 0.15, 0.15, 0.2, 0.2],
    2018: [0.15, 0.15, 0.15, 0.15, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2],
    2019: [0.15, 0.15, 0.15, 0.15, 0.2, 0.2, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2],
    2020: [0.1, 0.1, 0.15, 0.15, 0.15, 0.15, 0.2, 0.2, 0.1, 0.1, 0.2, 0.2],
  };

  return table[year][month - 1];
}

function taxThreshold(year) {
  const table = {
    2017: 1,
    2018: 2,
    2019: 2,
    2020: 3,
  };
  return table[year];
}

// Client 1
export function getBaseCharge() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);

  return aReading.baseCharge;
}

// Client 2
export function getTaxableCharge() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);

  return aReading.taxableCharge;
}

class Reading {
  constructor({ customer, quantity, month, year }) {
    this._customer = customer;
    this._quantity = quantity;
    this._month = month;
    this._year = year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }

  get month() {
    return this._month;
  }

  get year() {
    return this._year;
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

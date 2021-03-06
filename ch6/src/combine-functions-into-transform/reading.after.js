import { cloneDeep } from "lodash";

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

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

export function enrichReading(original) {
  const result = cloneDeep(original);

  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );

  return result;
}

// Client 1
export function getBaseCharge() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  return aReading.baseCharge;
}

// Client 2
export function getTaxableCharge() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  return aReading.taxableCharge;
}

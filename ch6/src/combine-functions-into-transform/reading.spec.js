import { cloneDeep } from "lodash";
import {
  getBaseCharge,
  getTaxableCharge,
  enrichReading,
} from "./reading.after";

describe("getBaseCharge", () => {
  it("calculates base charge", () => {
    expect(getBaseCharge()).toEqual(2);
  });
});

describe("getTaxableCharge", () => {
  it("calculates taxable charge", () => {
    expect(getTaxableCharge()).toEqual(1);
  });
});

describe("enrichReading", () => {
  it("check reading unchanged", () => {
    const baseReading = {
      customer: "Ivan",
      quantity: 15,
      month: 5,
      year: 2017,
    };
    const oracle = cloneDeep(baseReading);

    enrichReading(baseReading);

    expect(baseReading).toEqual(oracle);
  });
});

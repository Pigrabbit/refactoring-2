import { getBaseCharge, getTaxableCharge } from "./reading.after";

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

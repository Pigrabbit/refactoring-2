import { Province } from "./province";
import { sampleProvinceData } from "./sampleProvinceData";

describe("Province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", () => {
    expect(asia.shortfall).toEqual(5);
  });

  it("profit", () => {
    expect(asia.profit).toEqual(230);
  });

  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toEqual(-6);
    expect(asia.profit).toEqual(292);
  });
});

describe("Province with no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).toEqual(30);
  });

  it("profit", () => {
    expect(noProducers.profit).toEqual(0);
  });
});

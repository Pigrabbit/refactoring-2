import { Province } from "./province";
import { sampleProvinceData } from "./sampleProvinceData";

describe("Province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toEqual(5);
  });
});

import reportLines from "./reportLines";

describe("reportLines", () => {
  it("reports based on customer data", () => {
    const aCustomer = {
      name: "Fernando",
      location: "San Diego",
    };
    const expectedResult = [
      ["name", "Fernando"],
      ["location", "San Diego"],
    ];

    expect(reportLines(aCustomer)).toEqual(expectedResult);
  });
});

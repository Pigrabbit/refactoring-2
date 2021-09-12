import price from "./price";

describe("price", () => {
  it("calculates price", () => {
    const orders = [
      { quantity: 600, itemPrice: 1.25 },
      { quantity: 300, itemPrice: 3 },
    ];

    const expectedResults = [818.75, 990];

    orders.forEach((aOrder, idx) =>
      expect(price(aOrder)).toEqual(expectedResults[idx])
    );
  });
});

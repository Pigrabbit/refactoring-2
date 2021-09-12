import rating from "./rating";

describe("rating", () => {
  it("rates a driver", () => {
    const aDriver = {
      numberOfLateDeliveries: 3,
    };

    expect(rating(aDriver)).toEqual(1);

    aDriver.numberOfLateDeliveries = 6;
    expect(rating(aDriver)).toEqual(2);
  });
});

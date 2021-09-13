import initSpaceship from "./initSpaceship";

describe("initSpaceShip", () => {
  it("initialize spaceship and return them as array", () => {
    const owners = [
      { firstName: "Martin", lastName: "Fowler" },
      { firstName: "Rebecca", lastName: "Parsons" },
    ];

    const initalizedSpaceship = initSpaceship();

    expect(initalizedSpaceship).toHaveLength(2);
    for (const ship of initalizedSpaceship) {
      expect(
        owners.filter(
          (o) =>
            o.firstName === ship.owner.firstName &&
            o.lastName === ship.owner.lastName
        )
      ).toHaveLength(1);
    }
  });
});

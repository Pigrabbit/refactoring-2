import Spaceship from "./spaceShip";

let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

export default function initSpaceship() {
  const spaceship1 = new Spaceship();
  spaceship1.owner = defaultOwner;

  defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };
  const spaceship2 = new Spaceship();
  spaceship2.owner = defaultOwner;

  return [spaceship1, spaceship2];
}

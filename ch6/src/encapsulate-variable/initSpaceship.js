import Spaceship from "./spaceShip";
import { defaultOwner, setDefaultOwner } from "./defaultOwner";

export default function initSpaceship() {
  const spaceship1 = new Spaceship();
  spaceship1.owner = defaultOwner();

  setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });
  const spaceship2 = new Spaceship();
  spaceship2.owner = defaultOwner();

  return [spaceship1, spaceship2];
}

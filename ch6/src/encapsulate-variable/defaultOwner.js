let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };

export function defaultOwner() {
  return { ...defaultOwnerData };
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

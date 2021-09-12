export function inNewEngland(aCustomer) {
  return refactor_inNewEngland(aCustomer.address.state);
}

export function refactor_inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

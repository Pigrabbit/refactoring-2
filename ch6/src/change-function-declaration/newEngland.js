export default function inNewEngland(aCustomer) {
  return refactor_inNewEngland(aCustomer.address.state);
}

function refactor_inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

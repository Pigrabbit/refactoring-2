export default function isNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(
    aCustomer.address.state
  );
}

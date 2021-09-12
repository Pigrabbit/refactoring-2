import isNewEngland from "./newEngland";

describe("isNewEngland", () => {
  it("returns if a state belongs to NewEngland", () => {
    const customers = [
      { name: "Aaron", address: { state: "NY" } },
      { name: "Mookie", address: { state: "CA" } },
      { name: "Bell", address: { state: "VT" } },
      { name: "Chris", address: { state: "MA" } },
    ];

    const newEnglanders = customers.filter((c) => isNewEngland(c));

    expect(newEnglanders).toHaveLength(2);
  });
});

import { refactor_inNewEngland } from "./newEngland";

describe("inNewEngland", () => {
  it("returns if a state belongs to NewEngland", () => {
    const customers = [
      { name: "Aaron", address: { state: "NY" } },
      { name: "Mookie", address: { state: "CA" } },
      { name: "Bell", address: { state: "VT" } },
      { name: "Chris", address: { state: "MA" } },
    ];

    const newEnglanders = customers.filter((c) =>
      refactor_inNewEngland(c.address.state)
    );

    expect(newEnglanders).toHaveLength(2);
  });
});

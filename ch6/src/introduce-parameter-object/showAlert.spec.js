import showAlert from "./showAlert";

describe("showAlert", () => {
  it("shows alert when temperature is out of range", () => {
    const alert = showAlert();
    expect(alert).toEqual([
      { temp: 47, time: "2021-09-13 20:10" },
      { temp: 58, time: "2021-09-13 20:30" },
    ]);
  });
});

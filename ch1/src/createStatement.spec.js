import createStatementData from "./createStatementData";
import mockInvoices from "./invoices.json";
import mockPlays from "./plays.json";

describe("createStatementData", () => {
  it("generates statmentData with given invoice and plays object", () => {
    const expectedResult = {
      customer: "BigCo",
      performances: [
        {
          playID: "hamlet",
          audience: 55,
          play: { name: "Hamlet", type: "tragedy" },
          amount: 65000,
          volumeCredits: 25,
        },
        {
          playID: "as-like",
          audience: 35,
          play: { name: "As You Like It", type: "comedy" },
          amount: 58000,
          volumeCredits: 12,
        },
        {
          playID: "othello",
          audience: 40,
          play: { name: "Othello", type: "tragedy" },
          amount: 50000,
          volumeCredits: 10,
        },
      ],
      totalAmount: 173000,
      totalVolumeCredits: 47,
    };

    expect(createStatementData(mockInvoices, mockPlays)).toEqual(
      expectedResult
    );
  });
});

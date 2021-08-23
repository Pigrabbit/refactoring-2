const statementBefore = require("./statement.before");
const statementAfter = require("./statement.after");

const mockInvoices = require("./invoices.json");
const mockPlays = require("./plays.json");

describe("[before] statement function", () => {
  describe("invoice and play list is given", () => {
    it("generates statement with total amount and credits", () => {
      const expectedStatement = `Statement (Customer: BigCo)
 Hamlet: $650.00 (55 attendance)
 As You Like It: $580.00 (35 attendance)
 Othello: $500.00 (40 attendance)
Total: $1,730.00
Credits: 47p
`;

      expect(statementBefore(mockInvoices, mockPlays)).toEqual(
        expectedStatement
      );
    });
  });
});

describe("[after] statement function", () => {
  describe("invoice and play list is given", () => {
    it("generates statement with total amount and credits", () => {
      const expectedStatement = `Statement (Customer: BigCo)
 Hamlet: $650.00 (55 attendance)
 As You Like It: $580.00 (35 attendance)
 Othello: $500.00 (40 attendance)
Total: $1,730.00
Credits: 47p
`;

      expect(statementAfter(mockInvoices, mockPlays)).toEqual(
        expectedStatement
      );
    });
  });
});

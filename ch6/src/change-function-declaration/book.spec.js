import Book from "./book";

describe("Book", () => {
  it("adds reservation", () => {
    const book = new Book();
    const aCustomer = { name: "Lee" };

    book.addReservation(aCustomer);

    expect(book.reservations).toHaveLength(1);
    expect(book.reservations).toContain(aCustomer);
  });
});

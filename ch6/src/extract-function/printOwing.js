export default function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o;
  }

  // record due date
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // print details
  console.log(`customer name: ${invoice.customer}`);
  console.log(`outstanding: ${outstanding}`);
  console.log(`due date: ${invoice.dueDate.toLocaleDateString()}`);

  function printBanner() {
    console.log("****************");
    console.log("**** Owing by Customer ****");
    console.log("****************");
  }
}

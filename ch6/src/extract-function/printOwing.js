export default function printOwing(invoice) {
  printBanner();

  // calculate outstanding
  const outstanding = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);
  printDetails(invoice, outstanding);

  function printBanner() {
    console.log("****************");
    console.log("**** Owing by Customer ****");
    console.log("****************");
  }
}

function printDetails(invoice, outstanding) {
  console.log(`customer name: ${invoice.customer}`);
  console.log(`outstanding: ${outstanding}`);
  console.log(`due date: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o;
  }
  return result;
}

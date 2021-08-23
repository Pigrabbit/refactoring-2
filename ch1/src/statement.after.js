import createStatementData from "./createStatementData";

export default function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statement (Customer: ${data.customer})\n`;
  for (let perf of data.performances) {
    // prints statement
    result += ` ${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } attendance)\n`;
  }

  result += `Total: ${usd(data.totalAmount)}\n`;
  result += `Credits: ${data.totalVolumeCredits}p\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

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
}

export function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statement (Customer: ${data.customer})</h1>\n`;
  result += `<table>\n`;
  result += `<tr><th>play</th><th>audience</th><th>amount</th></tr>`;
  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td><td>(${perf.audience} attendance)</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }

  result += "</table>\n";
  result += `<p>Total: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>Credits: <em>${data.totalVolumeCredits}</em>p</p>\n`;

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

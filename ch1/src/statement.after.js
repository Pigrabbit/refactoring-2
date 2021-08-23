module.exports = function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement (Customer: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`Unknown Genre: ${playFor(aPerformance).type}`);
    }

    return result;
  }

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(perf);

    // accumulate credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add points for every 5 comedy audience
    if (playFor(perf).type === "comedy")
      volumeCredits += Math.floor(perf.audience / 5);

    // prints statement
    result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${
      perf.audience
    } attendance)\n`;
    totalAmount += thisAmount;
  }

  result += `Total: ${format(totalAmount / 100)}\n`;
  result += `Credits: ${volumeCredits}p\n`;
  return result;
};

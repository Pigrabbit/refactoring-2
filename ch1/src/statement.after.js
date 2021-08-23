module.exports = function statement(invoice, plays) {
  let result = `Statement (Customer: ${invoice.customer})\n`;

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

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if (playFor(aPerformance).type === "comedy")
      volumeCredits += Math.floor(aPerformance.audience / 5);
    return volumeCredits;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
  }

  function totalAmount() {
    let totalAmount = 0;
    for (let perf of invoice.performances) {
      totalAmount += amountFor(perf);
    }
    return totalAmount;
  }

  for (let perf of invoice.performances) {
    // prints statement
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    } attendance)\n`;
  }

  result += `Total: ${usd(totalAmount())}\n`;
  result += `Credits: ${totalVolumeCredits()}p\n`;
  return result;
};

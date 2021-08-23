export default function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance); // shallow copy
    result.play = playFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  return renderPlainText(statementData, plays);
}

function renderPlainText(data, plays) {
  let result = `Statement (Customer: ${data.customer})\n`;
  for (let perf of data.performances) {
    // prints statement
    result += ` ${perf.play.name}: ${usd(amountFor(perf))} (${
      perf.audience
    } attendance)\n`;
  }

  result += `Total: ${usd(totalAmount())}\n`;
  result += `Credits: ${totalVolumeCredits()}p\n`;
  return result;

  function amountFor(aPerformance) {
    let result = 0;

    switch (aPerformance.play.type) {
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
    if (aPerformance.play.type === "comedy")
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
    let result = 0;
    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }
    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }
}

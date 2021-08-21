function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement (Customer: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`Unknown Genre: ${play.type}`);
    }

    // accumulate credits
    volumeCredits += Math.max(perf.audience - 30, 0);
    // add points for every 5 comedy audience
    if (play.type === "comedy") volumeCredits += Math.floor(perf.audience / 5);

    // prints statement
    result += ` ${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    } attendance)\n`;
    totalAmount += thisAmount;
  }

  result += `Total: ${format(totalAmount / 100)}\n`;
  result += `Credits: ${volumeCredits}p\n`;
  return result;
}

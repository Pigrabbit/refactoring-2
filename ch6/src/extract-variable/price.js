export default function price(order) {
  // price = base price - quantity discount + ship fee
  const basePrice = order.quantity * order.itemPrice;
  const qunatityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - qunatityDiscount + shipping;
}

export type Order = {
  id: string;
  total: number;
  refunded: number;
  status: "paid" | "refunded";
};

export function refund(order: Order, amount: number): Order {
  if (amount <= 0 || amount > order.total - order.refunded) {
    throw new Error("invalid refund amount");
  }
  const refunded = order.refunded + amount;
  const status = refunded >= order.total ? "refunded" : "paid";
  return { ...order, refunded, status };
}

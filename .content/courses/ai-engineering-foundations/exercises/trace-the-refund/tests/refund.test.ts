import { describe, expect, it } from "vitest";
import { refund, type Order } from "../starter/refund";

const paid = (): Order => ({ id: "o1", total: 100, refunded: 0, status: "paid" });

describe("refund", () => {
  it("records a partial refund and keeps the order paid", () => {
    const r = refund(paid(), 30);
    expect(r).toMatchObject({ refunded: 30, status: "paid" });
  });
  it("marks a fully refunded order as refunded", () => {
    const r = refund(paid(), 100);
    expect(r.status).toBe("refunded");
  });
  it("marks the order refunded when partial refunds add up to the total", () => {
    const r = refund(refund(paid(), 40), 60);
    expect(r.status).toBe("refunded");
  });
  it("rejects refunds over the remaining balance", () => {
    expect(() => refund(refund(paid(), 90), 20)).toThrow();
  });
  it("does not mutate the input", () => {
    const o = paid();
    refund(o, 10);
    expect(o.refunded).toBe(0);
  });
});

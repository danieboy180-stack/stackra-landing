import { CheckCircle2 } from "lucide-react";

export function PaymentConfirmation() {
  return <div className="payment-toast"><CheckCircle2 size={18}/><div><b>Payment confirmed</b><span>Order #1042 · ₦18,000</span></div></div>;
}

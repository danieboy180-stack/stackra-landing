import { CheckCircle2, Clock3, ShoppingBag, UserRound } from "lucide-react";

export function MobileOrderCard() {
  return (
    <div className="mobile-ui">
      <div className="mobile-ui-header"><span>Stackra</span><span className="mobile-dot"/></div>
      <div className="mobile-order"><span className="ui-caption">NEW ORDER</span><h3>#1042</h3><div className="mobile-customer"><span className="avatar-mini"/><div><b>Tunde A.</b><small>2 items · WhatsApp</small></div></div><div className="mobile-total"><span>Total</span><b className="mono">₦18,000</b></div><button>Mark as paid <CheckCircle2 size={15}/></button></div>
      <div className="mobile-list"><span><ShoppingBag size={14}/>2 items</span><span><Clock3 size={14}/>Today</span><span><UserRound size={14}/>Returning customer</span></div>
    </div>
  );
}

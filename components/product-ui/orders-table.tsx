const orders = [
  { id: "#1042", customer: "Tunde A.", item: "Ankara set · 2 items", total: "₦18,000", state: "Paid" },
  { id: "#1041", customer: "Chioma O.", item: "Lace gown · 1 item", total: "₦9,500", state: "Pending" },
  { id: "#1040", customer: "Bola K.", item: "Beaded set · 1 item", total: "₦24,000", state: "Paid" },
  { id: "#1039", customer: "Femi S.", item: "Headwrap · 3 items", total: "₦6,200", state: "Paid" }
];

export function OrdersTable() {
  return (
    <div className="ui-table">
      <div className="ui-table-head"><span>Order</span><span>Status</span><span>Total</span></div>
      {orders.map((order) => (
        <div className="ui-table-row" key={order.id}>
          <span><b>{order.id} · {order.customer}</b><small>{order.item}</small></span>
          <span className={`status-pill ${order.state === "Paid" ? "paid" : "pending"}`}>{order.state}</span>
          <strong className="mono">{order.total}</strong>
        </div>
      ))}
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { OrdersTable } from "./orders-table";
import { RevenueChart } from "./revenue-chart";
import { StockAlert } from "./stock-alert";

export function Dashboard() {
  return (
    <div className="product-frame">
      <div className="product-topbar"><span className="top-dot"/><span className="top-dot"/><span className="top-dot"/><span className="product-url">app.stackra.dev</span></div>
      <div className="dashboard-grid">
        <aside className="product-sidebar" aria-label="Product preview navigation">
          <div className="product-brand">Stackra</div>
          {["Overview","Orders","Products","Customers","Storefront","Payments"].map((item,i)=><div className={`product-side-item ${i===0?"active":""}`} key={item}><span/>{item}</div>)}
        </aside>
        <div className="product-main">
          <div className="product-heading"><div><span className="ui-caption">Overview</span><h3>Good morning, Amaka</h3></div><span className="ui-date">Today · 7 Oct</span></div>
          <div className="ui-stat-grid">
            <div className="ui-stat"><span>Revenue</span><b className="mono">₦284,500</b><small className="up"><ArrowUpRight size={12}/>12.4%</small></div>
            <div className="ui-stat"><span>Orders</span><b className="mono">42</b><small>8 need attention</small></div>
            <div className="ui-stat"><span>Products</span><b className="mono">186</b><small>3 running low</small></div>
            <div className="ui-stat"><span>Customers</span><b className="mono">327</b><small>14 ready to reorder</small></div>
          </div>
          <div className="ui-two-col">
            <section className="ui-card"><div className="ui-card-title"><b>Recent orders</b><span>View all</span></div><OrdersTable/></section>
            <section className="ui-card"><div className="ui-card-title"><b>Revenue</b><span>This month</span></div><div className="chart-value mono">₦284.5k</div><RevenueChart/><StockAlert/></section>
          </div>
        </div>
      </div>
    </div>
  );
}

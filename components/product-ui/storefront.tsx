import { ArrowUpRight } from "lucide-react";

export function Storefront() {
  return (
    <div className="store-ui">
      <div className="store-ui-top"><span className="product-brand">Amaka's Closet</span><span className="store-ui-pill">Lagos, NG</span></div>
      <div className="store-ui-hero"><span className="store-kicker">New collection</span><h3>Pieces for the moments you remember.</h3><span className="store-link">Browse collection <ArrowUpRight size={14}/></span></div>
      <div className="store-ui-products">{["Ankara Dress","Beaded Set","Lace Gown","Headwrap"].map((name,i)=><div className="store-product" key={name}><div className={`store-product-image image-${i+1}`}/><b>{name}</b><span>₦{[15000,8500,22000,3500][i].toLocaleString()}</span></div>)}</div>
    </div>
  );
}

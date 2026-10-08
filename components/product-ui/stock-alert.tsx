import { ArrowUpRight, PackageCheck } from "lucide-react";

export function StockAlert() {
  return <div className="stock-alert"><PackageCheck size={16}/><div><b>3 products are running low</b><span>Black Ankara · Gold Hoop · Small box</span></div><ArrowUpRight size={14}/></div>;
}

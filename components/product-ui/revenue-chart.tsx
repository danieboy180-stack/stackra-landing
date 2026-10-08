export function RevenueChart() {
  const bars = [32, 45, 38, 60, 52, 74, 66, 84, 72, 100];
  return <div className="mini-chart" aria-label="Revenue trend">{bars.map((height,index)=><i key={index} style={{height:`${height}%`}} />)}</div>;
}

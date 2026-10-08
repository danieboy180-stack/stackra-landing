import { ImageResponse } from "next/og";

export const alt = "Stackra — From WhatsApp seller to a real business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",background:"#08090a",color:"#f4f4f5",alignItems:"center",padding:"80px",fontFamily:"sans-serif"}}>
      <div style={{display:"flex",flexDirection:"column",gap:24,maxWidth:920}}>
        <div style={{display:"flex",alignItems:"center",gap:14,fontSize:30,fontWeight:700}}>
          <div style={{width:34,height:34,borderRadius:10,background:"#69d5a1"}} />Stackra
        </div>
        <div style={{fontSize:76,fontWeight:600,lineHeight:1,letterSpacing:"-4px"}}>From WhatsApp seller<br/>to a real business.</div>
        <div style={{fontSize:24,color:"#b0b5b6"}}>Orders · Storefront · Inventory · Payments · Customers</div>
      </div>
    </div>
  );
}

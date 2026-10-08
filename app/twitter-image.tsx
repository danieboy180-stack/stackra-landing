import { ImageResponse } from "next/og";

export const alt = "Stackra — From WhatsApp seller to a real business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#08090a", color: "#f4f4f5", alignItems: "center", padding: 80 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>Stackra</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, lineHeight: 1, letterSpacing: "-4px" }}>From WhatsApp seller to a real business.</div>
        <div style={{ display: "flex", fontSize: 24, color: "#b0b5b6" }}>Orders · Storefront · Inventory · Payments · Customers</div>
      </div>
    </div>
  );
}

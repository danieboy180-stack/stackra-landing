"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { galleryPhotos } from "./photos";

const gallery = galleryPhotos;

function Photo({ file, sizes }: { file: string; sizes: string }) {
  return (
    <Image
      src={`/store/${file}`}
      alt=""
      fill
      sizes={sizes}
      draggable={false}
      className="object-cover"
      style={{ objectPosition: "50% 40%" }}
    />
  );
}

// The screens below are drawn in CSS, scoped to .sf so nothing leaks into the page.
// Colours follow the site theme (.dark), the same way the rest of the page does.
const css = `
@import url("https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=general-sans@400,600&display=swap");
.sf{--bg:#fff;--sheet:#f8f8f8;--card:#f2f2f7;--badge:#e5e5ea;--t:#000;--m:#6c6c70;--bd:rgba(0,0,0,.09);--red:#c0392b;--promo:#e5174b;--wa:#0a7a35;--brand:#e8793a;--dim:#8f8f93;--body:'General Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;--display:'Clash Display','General Sans',-apple-system,BlinkMacSystemFont,sans-serif;--img:clamp(104px,29vw,124px);background:var(--bg);color:var(--t);font:400 16px/1.5 var(--body);-webkit-font-smoothing:antialiased}
.dark .sf{--bg:#000;--sheet:#141414;--card:#1c1c1e;--badge:#3a3a3c;--t:#fff;--m:#b3b3b5;--bd:rgba(255,255,255,.08);--red:#ff453a;--dim:#050505}
.sf *{box-sizing:border-box;margin:0;padding:0}
.sf.sheet{background:var(--sheet);padding:20px}
.sf.s3wrap{background:var(--dim)}

.sf [data-n]{position:relative}
.sf [data-n]::after{content:attr(data-n);position:absolute;top:-8px;right:-6px;z-index:5;width:22px;height:22px;border-radius:50%;background:var(--t);color:var(--bg);font:600 12px/22px var(--body);text-align:center}
.sf .bleed[data-n]::after{right:12px}
.sf .top[data-n]{position:absolute}

.sf .ic{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.sf .circ{width:48px;height:48px;border-radius:50%;background:var(--card);border:2px solid var(--bd);display:grid;place-items:center}
.sf .b44{width:44px;height:44px;border-radius:50%;background:var(--badge);display:grid;place-items:center;flex:none}
.sf .hr{height:1.5px;background:var(--bd)}
.sf .row{display:flex;align-items:center;gap:12px}

.sf .cover{height:clamp(200px,56vw,280px);background:var(--card);position:relative}
.sf .cover::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.38) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 82%,var(--bg) 100%)}
.sf .top{top:20px;right:20px;display:flex;gap:12px;z-index:2}
.sf .head{margin-top:-40px;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 20px}
.sf .av{width:80px;height:80px;border-radius:50%;background:var(--brand);color:#000;font:600 24px/74px var(--body);border:3px solid var(--bg)}
.sf .head .nmx{font:700 28px/32px var(--display);letter-spacing:-.02em;margin:12px auto 4px;max-width:300px;overflow-wrap:anywhere}
.sf .head p{font-size:14px;line-height:1.45;color:var(--m);max-width:240px}
.sf .pillrow{display:flex;justify-content:center;padding:14px 20px 8px}
.sf .addr{display:inline-flex;align-items:center;gap:8px;min-height:44px;max-width:100%;padding:0 16px;border-radius:999px;background:var(--badge);font:700 16px/20px var(--display)}
.sf .addr .ic{width:18px;height:18px}
.sf .px{padding:0 20px 8px}
.sf .px.c{padding-bottom:12px}
.sf .chips{display:flex;gap:8px;overflow-x:auto;margin-inline:-20px;padding-inline:20px;scrollbar-width:none}
.sf .chips::-webkit-scrollbar{display:none}
.sf .chip{display:flex;align-items:center;gap:8px;min-height:40px;padding:0 14px;border-radius:12px;background:var(--badge);font:600 15px/20px var(--display);white-space:nowrap;flex:none}
.sf .chip .ic{width:16px;height:16px}
.sf .chip.r{background:var(--promo);color:#fff}
.sf .search{display:flex;align-items:center;gap:8px;min-height:52px;padding:0 16px;border-radius:999px;background:var(--badge);border:1.5px solid var(--bd);color:var(--m)}
.sf .search .ic{width:20px;height:20px}
.sf .list{display:flex;flex-direction:column;gap:8px;padding:12px 20px 0}
.sf .item{display:flex;align-items:flex-start;gap:12px;padding:6px 0}
.sf .img{flex:0 0 var(--img);width:var(--img);height:var(--img);border-radius:20px;background:var(--badge)}
.sf .info{flex:1;min-width:0;display:flex;flex-direction:column;min-height:var(--img)}
.sf .nm{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;min-width:0}
.sf .nm b{flex:1;min-width:0;font:600 16px/20px var(--display);letter-spacing:-.01em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.sf .nm span{flex:none;padding-top:1px;font:700 16px/20px var(--display);font-variant-numeric:tabular-nums;white-space:nowrap}
.sf .info p{margin-top:4px;font-size:13px;line-height:18px;color:var(--m);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.sf .pl{margin-top:auto;display:flex;justify-content:flex-end;padding-top:4px}
.sf .cart{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:16px;padding:16px 20px;border-top:1px solid var(--bd);border-radius:24px 24px 0 0;background:var(--card)}
.sf .cart .p{display:block;font:700 24px/30px var(--body);white-space:nowrap}
.sf .cart s{display:block;font-size:16px;line-height:22px;color:var(--m)}
.sf .cart .f{display:flex;align-items:center;gap:6px;font-size:15px;line-height:22px;color:var(--m)}
.sf .cart .f .ic{width:16px;height:16px}
.sf .go{flex:1;min-width:0;max-width:240px;min-height:56px;padding:0 22px;border-radius:999px;background:var(--wa);color:#fff;font:600 17px var(--body);display:flex;align-items:center;justify-content:center;gap:8px}
.sf .go .ic{width:20px;height:20px}

.sf .h24{font:700 24px/30px var(--display);letter-spacing:-.02em}
.sf .map{height:200px;border-radius:20px;background:var(--badge);position:relative;margin:12px 0}
.sf .map .mv{position:absolute;right:10px;bottom:10px;min-height:36px;padding:0 14px;border-radius:999px;background:var(--card);font:600 12px/36px var(--body);box-shadow:0 2px 10px rgba(0,0,0,.18)}
.sf .ad .t{flex:1;min-width:0}
.sf .ad .t b{display:block;font:700 17px/22px var(--display)}
.sf .ad .t span{display:block;font-size:14px;line-height:20px;color:var(--m);overflow-wrap:anywhere}
.sf .sum{margin:20px -20px -20px}
.sf .sum .w{display:block;width:100%;height:28px}
.sf .sum .body{background:var(--bg);padding:4px 20px 32px;margin-top:-1px}
.sf .sum .sh{font:700 30px/36px var(--display);letter-spacing:-.02em;margin-bottom:12px}
.sf .ln{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 0;font-size:17px;line-height:24px}
.sf .ln .v{font-variant-numeric:tabular-nums}
.sf .free{background:var(--red);color:#fff;border-radius:8px;padding:2px 10px;font:600 14px/22px var(--body)}
.sf .tot{display:flex;justify-content:space-between;margin-top:18px;font:700 24px/30px var(--display);letter-spacing:-.02em}
.sf .save{display:flex;align-items:center;gap:12px;margin-top:20px;padding:12px 16px 12px 12px;border-radius:16px;background:#ddefea;color:#000;font-size:17px;line-height:24px}
.dark .sf .save{background:rgba(47,191,155,.16);color:#fff}
.sf .save .nr{flex:none;width:44px;height:44px;border-radius:50%;background:rgba(47,191,155,.35);display:grid;place-items:center;font:600 20px var(--body)}
.sf .ref{font-size:12px;line-height:16px;color:var(--m);margin-top:16px}

.sf .backdrop{height:64px}
.sf .s3{background:var(--sheet);padding:12px 20px 20px;border-radius:36px 36px 0 0}
.sf .grab{width:40px;height:4px;border-radius:2px;background:var(--m);opacity:.35;margin:0 auto 20px}
.sf .h30{font:700 30px/36px var(--display);letter-spacing:-.02em;margin-bottom:8px}
.sf .ar{display:flex;align-items:center;gap:16px;padding:18px 4px;min-height:76px;flex:1;min-width:0}
.sf .ar .ic{width:26px;height:26px}
.sf .ar b{display:block;font:700 20px/26px var(--display);overflow-wrap:anywhere}
.sf .ar .s{display:block;font-size:16px;line-height:22px;color:var(--m)}
.sf .tick{flex:none;width:28px;height:28px;border-radius:50%;background:var(--wa);color:#fff;display:grid;place-items:center}
.sf .tick .ic{width:16px;height:16px;stroke:#fff}
.sf .add{display:flex;align-items:center;justify-content:center;gap:12px;min-height:60px;margin-top:20px;border-radius:999px;background:rgba(10,122,53,.12);color:var(--wa);font:700 18px var(--display)}

.sf .h36{font:700 36px/42px var(--display);letter-spacing:-.02em;overflow-wrap:anywhere}
.sf .h28{font:700 28px/34px var(--display);letter-spacing:-.02em;margin-bottom:20px}
.sf .h20{font:700 20px/26px var(--display);letter-spacing:-.01em;margin-bottom:8px}
.sf .gap44{margin-top:44px}
.sf .gap28{margin-top:28px}
.sf .pm{font-size:16px;line-height:24px;color:var(--m)}
.sf .pr{font-size:17px;line-height:26px;font-weight:600}
.sf .lk{display:flex;align-items:center;gap:16px;min-height:60px;padding:8px 0}
.sf .lk .t{flex:1;min-width:0}
.sf .lk b{display:block;font:600 17px/26px var(--body)}
.sf .lk .s{display:block;font-size:16px;line-height:24px;color:var(--m)}
.sf .hrs{display:flex;justify-content:space-between;gap:16px;font-size:17px;line-height:26px;padding:3px 0}
.sf .hrs.on{font-weight:600}
.sf .btn{display:flex;align-items:center;justify-content:center;gap:8px;min-height:56px;border-radius:999px;background:var(--badge);font:600 16px var(--body)}
.sf .btn.g{background:var(--wa);color:#fff}
.sf .btns{display:flex;flex-direction:column;gap:12px}
`;

// One icon sheet for all four screens.
function Sprite() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <symbol id="sf-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></symbol>
        <symbol id="sf-heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" /></symbol>
        <symbol id="sf-more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" /></symbol>
        <symbol id="sf-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></symbol>
        <symbol id="sf-chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6" /></symbol>
        <symbol id="sf-chevd" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></symbol>
        <symbol id="sf-pen" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z" /></symbol>
        <symbol id="sf-nav" viewBox="0 0 24 24"><path d="M3 11 22 2l-9 19-2-8z" /></symbol>
        <symbol id="sf-ok" viewBox="0 0 24 24"><path d="m5 12 5 5 9-10" /></symbol>
        <symbol id="sf-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></symbol>
        <symbol id="sf-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></symbol>
        <symbol id="sf-chat" viewBox="0 0 24 24"><path d="M21 12a8.5 8.5 0 01-12.3 7.6L3 21l1.5-5.2A8.5 8.5 0 1121 12z" /></symbol>
      </defs>
    </svg>
  );
}

function Ic({ id, style }: { id: string; style?: CSSProperties }) {
  return (
    <svg className="ic" style={style} aria-hidden="true">
      <use href={`#sf-${id}`} />
    </svg>
  );
}

// The same rounded device frame the page used before, so the screens sit in it cleanly.
function Device({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto w-full max-w-[448px] rounded-[2.5rem] border border-border bg-card p-2 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)]"
    >
      <div className="overflow-hidden rounded-[2rem] border border-border">
        {children}
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="sf">
      <div className="cover">
        <div className="top" data-n="1">
          <span className="circ"><Ic id="search" /></span>
          <span className="circ"><Ic id="heart" /></span>
          <span className="circ"><Ic id="more" style={{ fill: "currentColor", stroke: "none" }} /></span>
        </div>
      </div>
      <div className="head">
        <div className="av" data-n="2">BR</div>
        <div className="nmx" data-n="3">Black Royalty stores</div>
        <p>Beautiful and affordable wears, accessories and frames</p>
      </div>
      <div className="pillrow">
        <div className="addr" data-n="4">
          <Ic id="pin" />Add delivery address<Ic id="chevd" style={{ width: 16, height: 16 }} />
        </div>
      </div>
      <div className="px c" data-n="5">
        <div className="chips">
          <span className="chip">Same prices as in store<Ic id="chev" /></span>
          <span className="chip r">Free delivery today</span>
          <span className="chip r">-20% select items</span>
        </div>
      </div>
      <div className="px" data-n="6">
        <div className="search"><Ic id="search" />Search products</div>
      </div>
      <div className="list" data-n="7">
        <article className="item">
          <div className="img" />
          <div className="info">
            <div className="nm"><b>Beige Chunky Lace-Up Derbies</b><span>₦30,000</span></div>
            <p>Soft beige leather lace-up shoes with thick black platform sole. Clean, modern, and versatile.</p>
            <div className="pl"><span className="b44"><Ic id="plus" /></span></div>
          </div>
        </article>
        <article className="item">
          <div className="img" />
          <div className="info">
            <div className="nm"><b>98 basic top</b><span>₦6,500</span></div>
            <p>Colors: black and red</p>
            <div className="pl"><span className="b44"><Ic id="plus" /></span></div>
          </div>
        </article>
      </div>
      <div className="cart bleed" data-n="8">
        <div>
          <span className="p">₦36,500</span>
          <s>₦40,000</s>
          <span className="f">+ fees <Ic id="info" /></span>
        </div>
        <span className="go">Go to cart<Ic id="chev" /></span>
      </div>
    </div>
  );
}

function Screen2() {
  return (
    <div className="sf sheet">
      <p className="h24" data-n="1">Delivery address</p>
      <div className="map" data-n="2"><span className="mv">Move map</span></div>
      <div className="row ad" data-n="3">
        <Ic id="pin" />
        <div className="t"><b>12 Aminu Kano Crescent</b><span>Wuse 2, Abuja</span></div>
        <span className="b44"><Ic id="pen" style={{ width: 18, height: 18 }} /></span>
      </div>
      <div className="sum bleed" data-n="4">
        <svg className="w" viewBox="0 0 393 28" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 28V16C60 6 125 1 195 7S330 21 393 9V28Z" style={{ fill: "var(--bg)" }} />
        </svg>
        <div className="body">
          <p className="sh">Summary</p>
          <div className="ln"><span>Products</span><span className="v">₦65,000</span></div>
          <div className="hr" />
          <div className="ln"><span>Discount</span><span className="v" style={{ color: "var(--wa)" }}>-₦5,000</span></div>
          <div className="ln"><span>Delivery</span><span className="free">FREE</span></div>
          <div className="hr" />
          <div className="tot" data-n="5"><span>Total to pay</span><span>₦60,000</span></div>
          <div className="save" data-n="6">
            <span className="nr">₦</span>
            <p>You&apos;re saving <b style={{ fontWeight: 600 }}>₦5,000</b> on this order</p>
          </div>
          <p className="ref">Order ref: SR-48213</p>
        </div>
      </div>
    </div>
  );
}

// A bottom sheet, drawn over a dimmed strip of the store like it appears in the app.
function Screen3() {
  return (
    <div className="sf s3wrap">
      <div className="backdrop" />
      <div className="s3">
        <div className="grab" data-n="1" />
        <p className="h30" data-n="2">Choose a delivery address</p>
        <div className="row" data-n="3">
          <div className="ar">
            <Ic id="nav" />
            <div><b>Use current location</b><span className="s">Recommended</span></div>
          </div>
        </div>
        <div className="hr" />
        <div className="row" data-n="4">
          <div className="ar">
            <Ic id="pin" />
            <div style={{ flex: 1, minWidth: 0 }}><b>12 Aminu Kano Crescent</b><span className="s">Wuse 2, Abuja</span></div>
            <span className="tick"><Ic id="ok" /></span>
          </div>
          <span className="b44"><Ic id="pen" style={{ width: 18, height: 18 }} /></span>
        </div>
        <div className="hr" />
        <div className="add" data-n="5"><Ic id="plus" />Add a new address</div>
      </div>
    </div>
  );
}

function Screen4() {
  return (
    <div className="sf sheet">
      <p className="h36" data-n="1" style={{ marginBottom: 44 }}>Black Royalty stores</p>
      <p className="h28" data-n="2">Store information</p>
      <p className="h20" data-n="3">Contact</p>
      <p className="pm">For questions about products, availability or your order, please contact the store directly.</p>
      <div className="lk" data-n="4">
        <span className="b44"><Ic id="chat" style={{ width: 20, height: 20 }} /></span>
        <div className="t"><b>WhatsApp</b><span className="s">+234 802 221 3104</span></div>
        <Ic id="chev" style={{ color: "var(--m)" }} />
      </div>
      <p className="h20 gap28">Opening hours</p>
      <div data-n="5">
        <div className="hrs"><span>Monday</span><span>9:00 AM – 6:00 PM</span></div>
        <div className="hrs on"><span>Saturday</span><span>10:00 AM – 4:00 PM</span></div>
        <div className="hrs"><span>Sunday</span><span>Closed</span></div>
      </div>
      <p className="h28 gap44">Fees &amp; payments</p>
      <p className="pr">Estimated delivery fee: ₦1,500 – ₦4,000</p>
      <p className="pm" style={{ marginTop: 2 }}>The merchant confirms the final delivery charge on WhatsApp.</p>
      <p className="h28 gap44">Share store</p>
      <div className="btns" data-n="6">
        <div className="btn">Copy link</div>
        <div className="btn g"><Ic id="chat" style={{ width: 18, height: 18 }} />Share on WhatsApp</div>
        <div className="btn">More sharing options</div>
      </div>
    </div>
  );
}

type Legend = { label: string; body: string };

const screens: {
  eyebrow: string;
  title: string;
  Screen: () => ReactNode;
  legend: Legend[];
}[] = [
  {
    eyebrow: "Screen 1",
    title: "First screen (store home)",
    Screen: Screen1,
    legend: [
      { label: "Top actions", body: 'Search, heart (save store) and "..." (store details). 48px circles, 2px border, 12px apart, on the cover.' },
      { label: "Logo", body: "80px circle, 3px page-colour ring, overlaps the cover by 40px." },
      { label: "Name + tagline", body: "Clash Display 700 28/32. Tagline 14px muted, max 240px, centred." },
      { label: "Address pill", body: "Delivery stores only. 44px high. Opens the address sheet." },
      { label: "Chip row", body: '"Same prices", announcement, discount. 40px high, radius 12, scrolls sideways.' },
      { label: "Search pill", body: "52px high, badge fill, 1.5px border." },
      { label: "Product rows", body: 'Image (104-124px, radius 20) left. Name + price, 2-line description, 44px "+" bottom right. 8px between rows.' },
      { label: "Cart bar", body: 'Fixed bottom, radius 24 top. Total, struck original, "+ fees (i)", green "Go to cart" 56px.' },
    ],
  },
  {
    eyebrow: "Screen 2",
    title: "Checkout",
    Screen: Screen2,
    legend: [
      { label: "Section heading", body: 'Clash Display 700 24/30 ("Pickup address" in pickup mode).' },
      { label: "Map", body: '200px, radius 20. Ignores touches until "Move map" is tapped.' },
      { label: "Address row", body: "Pin, name 17/22, detail 14/20 muted, 44px edit button, 12px gaps." },
      { label: "Summary panel", body: "Page-colour panel with a wavy top edge. Rows 17/24 with 1.5px dividers. FREE tag radius 8." },
      { label: "Total to pay", body: 'Largest row. Reads "Total (excl. delivery)" while the fee is unconfirmed.' },
      { label: "Savings banner", body: "Teal, radius 16. Only when a discount exists." },
    ],
  },
  {
    eyebrow: "Screen 3",
    title: "Address chooser (bottom sheet)",
    Screen: Screen3,
    legend: [
      { label: "Drag handle", body: "40x4, 12px top inset, sheet radius 36 on top, 20px side padding." },
      { label: "Title", body: "Clash Display 700 30/36." },
      { label: "Current location", body: "76px row. Shares a map link with the seller." },
      { label: "Saved address", body: "Title 20/26, detail 16/22, green tick when active, 44px edit button." },
      { label: "Add button", body: "60px pill, light-green fill, green text." },
    ],
  },
  {
    eyebrow: "Screen 4",
    title: 'Store details ("..." button)',
    Screen: Screen4,
    legend: [
      { label: "Store name", body: "Clash Display 700 36/42." },
      { label: "Group heading", body: "28/34, 44px between groups: Store information, Delivery information, Fees & payments, Share store." },
      { label: "Block heading", body: "20/26, muted 16/24 body copy, 8px between." },
      { label: "Link row", body: "44px icon circle, label 17/26 semibold, value muted, chevron. 60px high." },
      { label: "Opening hours", body: "Today's row is bold." },
      { label: "Share buttons", body: "56px pills, 12px apart: copy (grey), WhatsApp (green), more (grey)." },
    ],
  },
];

export default function StoreAnatomy() {
  return (
    <section
      id="design"
      className="scroll-mt-28 px-3 py-16 sm:scroll-mt-32 sm:px-4 sm:py-24"
    >
      <style>{css}</style>
      <Sprite />
      <div className="mx-auto max-w-7xl md:px-4 lg:px-6">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-medium text-muted-foreground">
            The store design
          </p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-medium tracking-tighter text-balance sm:text-5xl md:text-6xl">
            How a store is designed.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every Stackra store follows the same clean layout, so customers
            always know where to look. You bring the name, the photos and the
            products.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            The store name, products, prices and contact details in these
            screens are sample data, shown only to illustrate the layout.
          </p>
        </Reveal>

        <div className="mt-12 space-y-20 lg:mt-16 lg:space-y-28">
          {screens.map(({ eyebrow, title, Screen, legend }) => (
            <div
              key={title}
              className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16"
            >
              <Reveal className="w-full">
                <Device>
                  <Screen />
                </Device>
              </Reveal>

              <div>
                <Reveal>
                  <p className="text-sm font-medium text-muted-foreground">
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 text-3xl leading-[1.08] font-medium tracking-tighter text-balance sm:text-4xl">
                    {title}
                  </h3>
                </Reveal>
                <ol className="mt-6 border-t border-border">
                  {legend.map((item, i) => (
                    <li key={item.label} className="border-b border-border">
                      <Reveal
                        delay={i * 0.04}
                        className="flex gap-4 py-4 sm:gap-5"
                      >
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-medium text-background">
                          {i + 1}
                        </span>
                        <div>
                          <h4 className="text-lg font-medium tracking-tight">
                            {item.label}
                          </h4>
                          <p className="mt-1 max-w-lg text-base leading-7 text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-20 max-w-2xl sm:mt-28">
          <h3 className="text-3xl leading-[1.08] font-medium tracking-tighter text-balance sm:text-4xl">
            Built around your photos.
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Good photography does most of the selling. A store gives every
            product the same clean frame, so your range looks consistent
            whatever you sell.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
          {gallery.map((file, i) => (
            <Reveal key={file} delay={(i % 6) * 0.04}>
              <div
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-xl border border-border sm:rounded-2xl",
                  i % 2 ? "bg-muted/50" : "bg-muted"
                )}
              >
                <Photo
                  file={file}
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 25vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

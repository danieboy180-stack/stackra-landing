"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Moon, Monitor, Sun, X } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

type Theme = "light" | "dark" | "system";

const menuGroups = [
  { label: "Product", links: [{ label: "Overview", href: "/product" }, { label: "Storefront", href: "/#storefront" }, { label: "How it works", href: "/#how-it-works" }] },
  { label: "Solutions", links: [{ label: "Sell", href: "/#solutions" }, { label: "Manage", href: "/#solutions" }, { label: "Get paid", href: "/#solutions" }, { label: "Grow", href: "/#solutions" }] },
  { label: "Resources", links: [{ label: "FAQ", href: "/#faq" }, { label: "Contact", href: "/contact" }] }
];

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = theme;
  document.documentElement.style.colorScheme = resolved;
  const meta = document.querySelector("meta[name=\"theme-color\"]") as HTMLMetaElement | null;
  if (meta) meta.content = resolved === "dark" ? "#08090a" : "#ffffff";
  document.documentElement.style.setProperty("--theme-color", resolved === "dark" ? "#08090a" : "#ffffff");
}

function ThemeMenu({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("stackra-theme") as Theme | null;
    const initial = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    localStorage.setItem("stackra-theme", next);
    applyTheme(next);
    setOpen(false);
  }

  const icon = theme === "dark" ? <Moon size={15} /> : theme === "light" ? <Sun size={15} /> : <Monitor size={15} />;
  const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System";

  return (
    <div className={`theme-menu ${mobile ? "theme-menu-mobile" : ""}`}>
      <button className="icon-button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} title="Theme">
        {icon}<span className="theme-label">{label}</span><ChevronDown size={14} />
      </button>
      {open && (
        <div className="theme-popover" role="menu" aria-label="Theme preference">
          {(["light", "dark", "system"] as Theme[]).map((option) => (
            <button key={option} role="menuitemradio" aria-checked={theme === option} onClick={() => choose(option)}>
              {option === "light" ? <Sun size={15} /> : option === "dark" ? <Moon size={15} /> : <Monitor size={15} />}
              {option[0].toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Announcement() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(localStorage.getItem("stackra-announcement-dismissed") !== "1");
  }, []);
  if (!visible) return null;
  return (
    <div className="announcement">
      <div className="announcement-inner">
        <span><b>Stackra</b> is building the simple commerce workspace for African merchants.</span>
        <Link href="/product">See the product <ArrowUpRight size={13} /></Link>
        <button aria-label="Dismiss announcement" onClick={() => { localStorage.setItem("stackra-announcement-dismissed", "1"); setVisible(false); }}><X size={14} /></button>
      </div>
    </div>
  );
}

export function SiteChrome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const close = () => { setMegaOpen(false); setMenuOpen(false); };
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Announcement />
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <Link href="/" className="brand" aria-label="Stackra home">
          <svg className="brand-logo" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M10 78 Q50 28 90 78" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity=".22" />
            <path d="M10 60 Q50 10 90 60" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity=".58" />
            <path d="M10 42 Q50 -8 90 42" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
          <span>{site.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <button className="nav-menu-trigger" aria-haspopup="true" aria-expanded={megaOpen} onClick={() => setMegaOpen((v) => !v)}>
            Product <ChevronDown size={14} />
          </button>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <button className="nav-menu-trigger" aria-haspopup="true" aria-expanded={megaOpen} onClick={() => setMegaOpen((v) => !v)}>
            Resources <ChevronDown size={14} />
          </button>
        </nav>

        <div className="header-actions">
          <Link href="https://admin.stackra.dev" className="header-text-link">Log in</Link>
          <ThemeMenu />
          <Link className="button button-primary" href={site.whatsapp.href}>Get your store set up <ArrowUpRight size={15} /></Link>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {megaOpen && (
        <div className="mega-menu" role="dialog" aria-label="Navigation menu">
          <div className="mega-grid">
            {menuGroups.map((group) => (
              <div key={group.label}>
                <div className="mega-title">{group.label}</div>
                <div className="mega-links">
                  {group.links.map((link) => <Link key={link.label} href={link.href} onClick={() => setMegaOpen(false)}>{link.label}<ArrowUpRight size={13} /></Link>)}
                </div>
              </div>
            ))}
            <div className="mega-callout">
              <span className="eyebrow">Built around your flow</span>
              <strong>Sell where your customers already buy.</strong>
              <p>Keep WhatsApp in the flow. Let Stackra handle the system behind it.</p>
            </div>
          </div>
        </div>
      )}

      <div className={`mobile-sheet ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-links">
          {menuGroups.flatMap((g) => g.links).filter((v, i, a) => a.findIndex((x) => x.label === v.label) === i).map((link) => <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={17} /></Link>)}
          <Link href="/about" onClick={() => setMenuOpen(false)}>About <ArrowUpRight size={17} /></Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={17} /></Link>
        </div>
        <div className="mobile-bottom">
          <ThemeMenu mobile />
          <Link href={site.whatsapp.href} className="button button-primary mobile-cta">Get your store set up <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </>
  );
}

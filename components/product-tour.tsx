"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import { Dashboard, MobileOrderCard, Storefront } from "@/components/product-ui";
import type { ProductSurface } from "@/components/product-ui/types";

const panels: Record<ProductSurface, { label: string; title: string; body: string; component: ReactNode }> = {
  storefront: {
    label: "Storefront",
    title: "Give your business a real home on the web.",
    body: "Customers can browse your products, see prices and start an order without asking you to resend the same pictures all day.",
    component: <Storefront />
  },
  admin: {
    label: "Admin",
    title: "See the work behind every sale.",
    body: "Orders, inventory, payments and customers sit together so the next action is visible instead of buried.",
    component: <Dashboard />
  },
  mobile: {
    label: "Mobile",
    title: "Keep the business moving from your phone.",
    body: "Check a new order, confirm a payment and keep customer context close while you are away from the desk.",
    component: <MobileOrderCard />
  }
};

export function ProductTour() {
  const tabKeys = ["storefront", "admin", "mobile"] as const;
  const [active, setActive] = useState<ProductSurface>("admin");
  const panel = panels[active];

  return (
    <div className="tour surface">
      <div className="tour-tabs" role="tablist" aria-label="Product surfaces">
        {tabKeys.map((key) => (
          <button
            key={key}
            className="tour-tab"
            role="tab"
            aria-selected={active === key}
            aria-controls={`tour-panel-${key}`}
            tabIndex={active === key ? 0 : -1}
            onClick={() => setActive(key)}
            onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
              event.preventDefault();
              const index = tabKeys.indexOf(key);
              const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabKeys.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabKeys.length) % tabKeys.length;
              setActive(tabKeys[nextIndex]);
              document.getElementById(`tour-tab-${tabKeys[nextIndex]}`)?.focus();
            }}
            id={`tour-tab-${key}`}
          >
            {panels[key].label}
          </button>
        ))}
      </div>
      <div className="tour-copy">
        <div>
          <span className="eyebrow">{panel.label}</span>
          <h3 className="h2 balance">{panel.title}</h3>
          <p className="body">{panel.body}</p>
        </div>
      </div>
      <div id={`tour-panel-${active}`} className="tour-panel" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {panel.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export function GridDebug() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(new URLSearchParams(window.location.search).get("grid") === "1");
  }, []);
  if (!enabled) return null;
  return <div className="grid-debug" aria-hidden="true"><div className="grid-debug-columns" /></div>;
}

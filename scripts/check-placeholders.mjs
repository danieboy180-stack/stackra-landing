import { promises as fs } from "node:fs";
import path from "node:path";

const roots = ["content"];
const marker = "PLACEHOLDER";
const offenders = [];

async function walk(dir) {
  let entries = [];
  try { entries = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && full.endsWith(".ts")) {
      const text = await fs.readFile(full, "utf8");
      if (text.includes(marker)) offenders.push(full);
    }
  }
}

for (const root of roots) await walk(root);
if (offenders.length) {
  console.error("Unresolved marketing placeholders remain:", offenders.join(", "));
  process.exit(1);
}
console.log("Placeholder guard passed.");

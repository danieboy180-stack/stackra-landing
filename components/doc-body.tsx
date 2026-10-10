import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type Cta = { label: string; href: string; secondary: boolean };

type Block =
  | { t: "h2" | "h3" | "p" | "note"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "cta"; items: Cta[] };

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Markup is described in lib/pages/types.ts. Blocks are separated by a blank line.
function parse(src: string): Block[] {
  return src
    .trim()
    .split(/\n{2,}/)
    .map((chunk): Block => {
      const lines = chunk.split("\n").map((l) => l.trim());
      const first = lines[0];

      if (first.startsWith("### ")) return { t: "h3", text: first.slice(4) };
      if (first.startsWith("## ")) return { t: "h2", text: first.slice(3) };
      if (first.startsWith("> ")) {
        return {
          t: "note",
          text: lines.map((l) => l.replace(/^>\s?/, "")).join(" "),
        };
      }
      if (first.startsWith("- ")) {
        return { t: "ul", items: lines.map((l) => l.replace(/^-\s+/, "")) };
      }
      if (first.startsWith("@")) {
        const items: Cta[] = [];
        for (const line of lines) {
          const m = /^@(primary|secondary)\s+(.+?)\s+\|\s+(\S+)$/.exec(line);
          if (m) {
            items.push({
              label: m[2],
              href: m[3],
              secondary: m[1] === "secondary",
            });
          }
        }
        return { t: "cta", items };
      }
      return { t: "p", text: lines.join(" ") };
    });
}

export function getHeadings(body: string) {
  return parse(body).flatMap((b) =>
    b.t === "h2" ? [{ id: slugify(b.text), text: b.text }] : []
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return href.startsWith("http") ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

// **bold**, [placeholder] (highlighted), {link text|/href}
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]|\{[^}|]+\|[^}]+\})/g;

export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.startsWith("**")) {
          return (
            <strong key={i} className="font-medium text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("[")) {
          return (
            <mark
              key={i}
              className="rounded bg-amber-200/70 px-1 py-0.5 text-foreground dark:bg-amber-400/20"
            >
              {part}
            </mark>
          );
        }
        if (part.startsWith("{")) {
          const [label, href] = part.slice(1, -1).split("|");
          return (
            <SmartLink
              key={i}
              href={href}
              className="font-medium text-foreground underline underline-offset-4 hover:opacity-80"
            >
              {label}
            </SmartLink>
          );
        }
        return part;
      })}
    </>
  );
}

export function DocBody({ body }: { body: string }) {
  return (
    <div className="text-[15px] leading-7 text-foreground/80 sm:text-base sm:leading-7">
      {parse(body).map((block, i) => {
        switch (block.t) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mt-14 mb-1 scroll-mt-24 text-2xl font-medium tracking-tight text-foreground"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-1 text-lg font-medium tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            );
          case "note":
            return (
              <aside
                key={i}
                className="mt-6 rounded-lg border border-amber-300/70 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100"
              >
                <span className="mr-1 font-medium">Draft note:</span>
                <Inline text={block.text} />
              </aside>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-4 list-disc space-y-2 pl-6 marker:text-muted-foreground"
              >
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <div key={i} className="mt-8 flex flex-wrap items-center gap-3">
                {block.items.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    variant={cta.secondary ? "outline" : "default"}
                  >
                    {cta.href.startsWith("http") ? (
                      <a href={cta.href}>{cta.label}</a>
                    ) : (
                      <Link href={cta.href}>{cta.label}</Link>
                    )}
                  </Button>
                ))}
              </div>
            );
          default:
            return (
              <p key={i} className="mt-4">
                <Inline text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}

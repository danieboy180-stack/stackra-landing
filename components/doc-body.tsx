import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import PicStrip from "@/components/pic-strip";
import { cn } from "@/lib/utils";

type Cta = { label: string; href: string; secondary: boolean };
type Card = { title: string; text: string; href: string; badge?: string };
type Row = { label?: string; value: string };

type Block =
  | { t: "h2" | "h3" | "p" | "note" | "callout"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "cta"; items: Cta[] }
  | { t: "cards"; items: Card[] }
  | { t: "details"; rows: Row[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "strip"; count: number }
  | { t: "pic" };

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
      // Table: "| a | b |" rows, the second row is the "|---|---|" divider.
      // A pipe inside a {link|href} token is not a column break.
      if (first.startsWith("|")) {
        const cells = (l: string) =>
          l
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split(/\|(?![^{}]*\})/)
            .map((c) => c.trim());
        const [head, , ...rows] = lines.map(cells);
        return { t: "table", head, rows };
      }
      if (first.startsWith("- ")) {
        return { t: "ul", items: lines.map((l) => l.replace(/^-\s+/, "")) };
      }
      // Numbered list: every line starts with "1. ", "2. ", ...
      if (/^\d+\.\s/.test(first)) {
        return {
          t: "ol",
          items: lines.map((l) => l.replace(/^\d+\.\s+/, "")),
        };
      }
      // @callout (neutral info box) / @cards (title | text | href | badge) /
      // @details (Label: value rows). The text follows on the next lines.
      if (first === "@callout") {
        return { t: "callout", text: lines.slice(1).join(" ") };
      }
      if (first === "@cards") {
        return {
          t: "cards",
          items: lines.slice(1).map((l) => {
            const [title, text, href, badge] = l.split(" | ").map((s) => s.trim());
            return { title, text, href, badge };
          }),
        };
      }
      if (first === "@details") {
        return {
          t: "details",
          rows: lines.slice(1).map((l): Row => {
            const m = /^([^:[{*]{2,48}):\s+(.+)$/.exec(l);
            return m ? { label: m[1], value: m[2] } : { value: l };
          }),
        };
      }
      if (first.startsWith("@strip")) {
        return { t: "strip", count: Number(first.split(/\s+/)[1]) || 6 };
      }
      if (first.startsWith("@pic")) return { t: "pic" };
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
  return /^(https?:|mailto:|tel:)/.test(href) ? (
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
              <Inline text={part.slice(2, -2)} />
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

// One card per row: first column is the title, the rest are label / value pairs.
function RowCards({
  head,
  rows,
  className,
}: {
  head: string[];
  rows: string[][];
  className: string;
}) {
  return (
    <div className={className}>
      {rows.map((row, r) => (
        <div
          key={r}
          className="min-w-0 rounded-2xl border border-border bg-muted/40 p-4"
        >
          <p className="text-[15px] leading-6 font-medium break-words text-foreground">
            <Inline text={row[0] ?? ""} />
          </p>
          <div className="mt-3 space-y-3">
            {head.slice(1).map((label, c) =>
              row[c + 1] ? (
                <dl key={c}>
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-0.5 text-[15px] leading-6 break-words text-foreground/80">
                    <Inline text={row[c + 1]} />
                  </dd>
                </dl>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Phones (and tables with more than four columns) get stacked cards; a real
// table only from md up, where four columns or fewer still fit the page width.
function DocTable({ head, rows }: { head: string[]; rows: string[][] }) {
  const wide = head.length > 4;
  return (
    <div className="mt-6">
      <RowCards
        head={head}
        rows={rows}
        className={cn("grid gap-3", wide ? "sm:grid-cols-2" : "md:hidden")}
      />
      {!wide && (
        <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
          <table className="w-full text-left text-sm leading-6">
            <thead className="bg-muted/60 text-xs text-muted-foreground">
              <tr>
                {head.map((h, c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row, r) => (
                <tr key={r}>
                  {head.map((_, c) => (
                    <td
                      key={c}
                      className={cn(
                        "px-4 py-3.5 align-top break-words",
                        c === 0
                          ? "font-medium text-foreground"
                          : "text-foreground/80"
                      )}
                    >
                      <Inline text={row[c] ?? ""} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function DocBody({ body }: { body: string }) {
  return (
    <div className="text-[16px] leading-7 text-foreground/80 sm:text-[17px] sm:leading-8">
      {parse(body).map((block, i) => {
        switch (block.t) {
          // Headings use the home hero's style: Satoshi, tight tracking and leading.
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mt-16 mb-4 scroll-mt-24 text-[28px] leading-[1.08] font-medium tracking-tighter text-foreground sm:text-[34px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-10 mb-2 text-xl leading-[1.15] font-medium tracking-tighter text-foreground sm:text-2xl"
              >
                {block.text}
              </h3>
            );
          case "note":
            return (
              <aside
                key={i}
                className="mt-8 rounded-lg border border-amber-300/70 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100"
              >
                <span className="mr-1 font-medium">Draft note:</span>
                <Inline text={block.text} />
              </aside>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="mt-8 flex gap-3 rounded-2xl border border-border bg-muted/50 px-4 py-4 text-[15px] leading-6 text-foreground/80"
              >
                <Info
                  className="mt-0.5 size-[18px] shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <p className="min-w-0">
                  <Inline text={block.text} />
                </p>
              </aside>
            );
          case "details":
            return (
              <div
                key={i}
                className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border"
              >
                {block.rows.map((row, j) =>
                  row.label ? (
                    <dl
                      key={j}
                      className="grid gap-1 px-4 py-3.5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6"
                    >
                      <dt className="text-sm text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="min-w-0 text-[15px] leading-6 break-words text-foreground">
                        <Inline text={row.value} />
                      </dd>
                    </dl>
                  ) : (
                    <p
                      key={j}
                      className="bg-muted/50 px-4 py-3 text-sm font-medium text-foreground"
                    >
                      <Inline text={row.value} />
                    </p>
                  )
                )}
              </div>
            );
          case "table":
            return <DocTable key={i} head={block.head} rows={block.rows} />;
          case "cards":
            return (
              <div key={i} className="mt-6 grid gap-3 sm:grid-cols-2">
                {block.items.map((card) => (
                  <SmartLink
                    key={card.title}
                    href={card.href}
                    className="group flex min-h-36 min-w-0 flex-col justify-between gap-6 rounded-[22px] bg-muted/60 p-5 ring-1 ring-black/[0.04] transition-all hover:bg-muted active:scale-[0.99] dark:ring-white/10"
                  >
                    <span className="flex items-start justify-between gap-3">
                      {card.badge ? (
                        <span className="rounded-full bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-black/[0.06] dark:ring-white/10">
                          {card.badge}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-black/[0.06] dark:ring-white/10">
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </span>
                    </span>
                    <span className="block min-w-0">
                      <span className="block text-lg leading-tight font-medium tracking-tight break-words text-foreground">
                        {card.title}
                      </span>
                      <span className="mt-1.5 block text-[15px] leading-6 text-muted-foreground">
                        {card.text}
                      </span>
                    </span>
                  </SmartLink>
                ))}
              </div>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-5 list-disc space-y-2.5 pl-6 marker:text-muted-foreground"
              >
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mt-5 list-decimal space-y-2.5 pl-7 marker:text-muted-foreground"
              >
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline text={item} />
                  </li>
                ))}
              </ol>
            );
          case "strip":
            return <PicStrip key={i} count={block.count} />;
          case "pic":
            return (
              <div
                key={i}
                aria-hidden
                className="my-10 aspect-[16/10] w-full rounded-2xl border border-border bg-muted sm:my-12"
              />
            );
          case "cta":
            return (
              <div key={i} className="mt-10 flex flex-wrap items-center gap-3">
                {block.items.map((cta) => (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    variant={cta.secondary ? "outline" : "default"}
                    className="h-auto min-h-10 max-w-full py-2.5 text-center whitespace-normal"
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
              <p key={i} className="mt-5">
                <Inline text={block.text} />
              </p>
            );
        }
      })}
    </div>
  );
}

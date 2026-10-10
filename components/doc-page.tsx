import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { DocBody, Inline, getHeadings } from "@/components/doc-body";
import { groups, pages, type DocPageData } from "@/lib/pages";
import { cn } from "@/lib/utils";

function SidebarNav({ current }: { current: string }) {
  return (
    <nav aria-label="Pages" className="space-y-6">
      {groups.map((group) => (
        <div key={group}>
          <p className="mb-2 px-3 text-xs font-medium text-muted-foreground">
            {group}
          </p>
          <ul className="space-y-0.5">
            {pages
              .filter((p) => p.group === group)
              .map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    aria-current={p.slug === current ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                      p.slug === current
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {p.nav}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

// Docs-style page: sidebar of every page on the left, copy in the middle,
// "On this page" on the right (wide screens), previous/next at the bottom.
export default function DocPage({ page }: { page: DocPageData }) {
  const index = pages.findIndex((p) => p.slug === page.slug);
  const prev: DocPageData | undefined = pages[index - 1];
  const next: DocPageData | undefined = pages[index + 1];
  const headings = getHeadings(page.body);

  return (
    <div className="mx-auto grid w-full max-w-[1392px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-14 xl:grid-cols-[220px_minmax(0,1fr)_200px]">
      <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100dvh_-_7rem)] lg:self-start lg:overflow-y-auto">
        <details className="group rounded-lg border border-border lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
            <span>
              <span className="text-muted-foreground">{page.group} / </span>
              {page.nav}
            </span>
            <ChevronDown
              className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <div className="border-t border-border p-3">
            <SidebarNav current={page.slug} />
          </div>
        </details>
        <div className="hidden lg:block">
          <SidebarNav current={page.slug} />
        </div>
      </aside>

      <article className="min-w-0 max-w-3xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span>{page.group}</span>
          <span aria-hidden>/</span>
          <span className="text-foreground">{page.nav}</span>
        </nav>

        <p className="text-sm font-medium text-muted-foreground">
          {page.eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-medium tracking-tighter text-balance sm:text-5xl">
          {page.title}
        </h1>
        {page.lead && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            <Inline text={page.lead} />
          </p>
        )}

        <div className="mt-10 border-t border-border pt-10 sm:mt-12 sm:pt-12">
          <DocBody body={page.body} />
        </div>

        <div className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/${prev.slug}`}
              className="rounded-xl border border-border p-4 transition-colors hover:bg-muted/50"
            >
              <span className="text-xs text-muted-foreground">Previous</span>
              <span className="mt-1 block font-medium">{prev.nav}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/${next.slug}`}
              className="rounded-xl border border-border p-4 transition-colors hover:bg-muted/50 sm:text-right"
            >
              <span className="text-xs text-muted-foreground">Next</span>
              <span className="mt-1 block font-medium">{next.nav}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>

      {headings.length > 2 && (
        <aside className="hidden xl:block">
          <div className="sticky top-24 max-h-[calc(100dvh_-_7rem)] overflow-y-auto">
            <p className="mb-3 text-xs font-medium text-foreground">
              On this page
            </p>
            <ul className="space-y-2 border-l border-border">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="-ml-px block border-l border-transparent pl-3 text-[13px] leading-5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}

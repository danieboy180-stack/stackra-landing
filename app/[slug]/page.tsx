import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DocPage from "@/components/doc-page";
import Footer from "@/components/footer";
import { getPage, pages } from "@/lib/pages";

// Only the pages listed in lib/pages exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: `${page.nav} | Stackra`,
    description: page.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <>
      <main className="mx-3 min-h-dvh border-x border-border sm:mx-6 xl:mx-auto xl:max-w-[1392px]">
        <DocPage page={page} />
      </main>
      <Footer />
    </>
  );
}

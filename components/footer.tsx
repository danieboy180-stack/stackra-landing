"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { StackraLogo, StackraMark } from "@/components/stackra-logo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 1227"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  );
}

// Social URLs are placeholders ("#") until the real ones are set.
const socials = [
  { name: "X", href: "#", Icon: XIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedInLogoIcon },
  { name: "Instagram", href: "#", Icon: InstagramLogoIcon },
];

// Every link opens a page from lib/pages. A column title with an href is a link too.
const columns = [
  {
    title: "Product",
    links: [
      { name: "How it works", href: "/how-it-works" },
      { name: "Customers", href: "/customers" },
      { name: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Get started",
    href: "/get-started",
    links: [
      { name: "Start selling", href: "/start-selling" },
      { name: "Sign in", href: "/sign-in" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "text-sm text-muted-foreground transition-colors hover:text-foreground";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              aria-label="Stackra home"
              className="inline-block w-fit text-foreground transition-opacity hover:opacity-80"
            >
              <StackraLogo className="h-9 w-auto sm:h-10" />
            </Link>
            <div className="-ml-2 flex items-center gap-1">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex size-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-24"
          >
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-medium">
                  {col.href ? (
                    <Link
                      href={col.href}
                      className="transition-opacity hover:opacity-70"
                    >
                      {col.title}
                    </Link>
                  ) : (
                    col.title
                  )}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </motion.div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-20 sm:flex-row sm:items-center">
          <StackraMark className="size-7 text-foreground" />
          <p>© {new Date().getFullYear()} Stackra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

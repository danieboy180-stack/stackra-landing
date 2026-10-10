"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/theme-switcher";
import { StackraLogo } from "@/components/stackra-logo";
import { APP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

// "/#id" so the links also work from the footer pages.
const links = [
  { name: "How it works", href: "/#how-it-works" },
  { name: "Customers", href: "/#customers" },
  { name: "Testimonials", href: "/#testimonials" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showBorder = isScrolled || isMenuOpen;

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-[border-color] duration-300",
        showBorder ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto max-w-[1392px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          <Link
            href="/"
            aria-label="Stackra home"
            className="text-foreground transition-opacity hover:opacity-80"
          >
            <StackraLogo className="h-8 w-auto" />
          </Link>

          <div className="hidden items-center gap-1 sm:mr-auto sm:ml-8 sm:flex">
            {links.map((link) => (
              <Button key={link.name} asChild variant="ghost" size="sm">
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href={APP_URL}
              className="px-2 text-[15px] font-medium underline underline-offset-4 sm:hidden"
            >
              Start for free
            </Link>

            <div className="hidden items-center gap-2 sm:flex">
              <ThemeSwitcher />
              <Button asChild variant="outline">
                <Link href={APP_URL}>Log in</Link>
              </Button>
              <Button asChild>
                <Link href={APP_URL}>Start for free</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
              </motion.div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden sm:hidden"
            >
              <div className="space-y-1 pt-2 pb-4">
                {[...links, { name: "Log in", href: APP_URL }].map(
                  (item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-lg px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )
                )}
                <div className="flex items-center justify-between rounded-lg px-3 text-lg font-medium">
                  <span>Theme</span>
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

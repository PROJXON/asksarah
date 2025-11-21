'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Featured', href: '/#listings' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Listings', href: '/listings' },
  { label: 'Reviews', href: '/reviews' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200"
        >
          Ask Sarah Conner
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => {
            const isSameRoute =
              !link.href.includes('#') && pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  isSameRoute ? 'text-white' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
          href="tel:+13108717600"
        >
          310.871.7600
        </a>
      </div>
    </header>
  );
}


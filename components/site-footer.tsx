import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-semibold uppercase tracking-[0.4em] text-slate-200">
            Ask Sarah Conner
          </p>
          <p className="mt-2 max-w-sm text-slate-400">
            Luxury real estate guided by Sarah Conner &amp; Pate Stevens.
            Malibu, desert, and international estates with bespoke service.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wide text-slate-400">
          <Link href="/listings" className="hover:text-white">
            Listings
          </Link>
          <Link href="/reviews" className="hover:text-white">
            Reviews
          </Link>
          <a href="mailto:hello@asksarahconner.com" className="hover:text-white">
            Email
          </a>
          <a href="tel:+13108717600" className="hover:text-white">
            310.871.7600
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ask Sarah Conner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


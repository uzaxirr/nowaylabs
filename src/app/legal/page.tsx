import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal — No Way Labs LLC",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-6 py-5 md:px-16">
        <Link
          href="/"
          className="font-cursive text-2xl font-bold text-white md:text-[28px]"
        >
          no way labs
        </Link>
        <Link
          href="/"
          className="font-mono text-xs text-muted hover:text-white md:text-sm"
        >
          ← Back
        </Link>
      </nav>

      <main className="px-6 pt-16 pb-24 md:px-16 md:pt-24">
        <h1 className="font-display text-[36px] font-bold tracking-[-0.03em] text-white md:text-[48px]">
          Legal
        </h1>

        <div className="mt-12 flex max-w-[640px] flex-col gap-12">
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-white">
              Company Information
            </h2>
            <div className="flex flex-col gap-1 text-[15px] leading-7 text-muted">
              <p className="text-white">No Way Labs LLC</p>
              <p>Limited Liability Company</p>
              <p>State of Wyoming</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-white">
              Registered Agent
            </h2>
            <div className="flex flex-col gap-1 text-[15px] leading-7 text-muted">
              <p>Wyoming Registered Agent Services LLC</p>
              <p>30 N Gould St Ste 100</p>
              <p>Sheridan, WY 82801</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-white">
              Mailing Address
            </h2>
            <div className="flex flex-col gap-1 text-[15px] leading-7 text-muted">
              <p>No Way Labs LLC</p>
              <p>32 N Gould St</p>
              <p>Sheridan, Wyoming 82801</p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-white">
              Contact
            </h2>
            <div className="flex flex-col gap-1 text-[15px] leading-7 text-muted">
              <a
                href="mailto:hello@nowaylabs.xyz"
                className="text-white hover:underline"
              >
                hello@nowaylabs.xyz
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8 md:px-16">
        <span className="text-[13px] text-muted">
          © 2026 No Way Labs LLC
        </span>
      </footer>
    </div>
  );
}

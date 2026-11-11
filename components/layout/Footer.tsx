import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-14 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium tracking-tight">
                Ekhaya
              </span>
            </Link>
            <p className="mt-2 text-sm text-white/50">
              Properties · Eswatini
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Curated property advisory and exclusive listings in the heart of
              the Kingdom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              <Link href="/#listings" className="transition-colors hover:text-white">
                Listings
              </Link>
              <Link href="/#about" className="transition-colors hover:text-white">
                About
              </Link>
              <Link href="/#contact" className="transition-colors hover:text-white">
                Contact
              </Link>
              <a
                href="https://wa.me/26876780729"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/40">
              Contact
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>Msakato Street, Mbabane</p>
              <a
                href="https://wa.me/26876780729"
                className="block transition-colors hover:text-white"
              >
                +268 7678 0729
              </a>
              <a
                href="tel:+26876022772"
                className="block transition-colors hover:text-white"
              >
                7602 2772
              </a>
              <a
                href="mailto:info@ekhaya.co.sz"
                className="block transition-colors hover:text-white"
              >
                info@ekhaya.co.sz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Ekhaya Properties. All rights reserved.
          · Msakato Street, Mbabane, Eswatini
        </div>
      </div>
    </footer>
  );
}

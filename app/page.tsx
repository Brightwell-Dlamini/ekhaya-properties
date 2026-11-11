import Hero from "@/components/sections/Hero";
import PropertyGrid from "@/components/sections/PropertyGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertyGrid />

      {/* Why Ekhaya Section */}
      <section id="about" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
              Why Ekhaya
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-charcoal sm:text-5xl">
              Trusted Advisory for Discerning Clients
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
              As a dedicated real estate agency, we combine deep local market
              knowledge with a refined, client-first approach. We guide you
              through every step of buying, selling, or leasing property in
              Eswatini.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Local Market Experts",
                description:
                  "Intimate knowledge of Mbabane, Ezulwini, Manzini and emerging corridors across the Kingdom.",
              },
              {
                title: "Seamless Paperwork",
                description:
                  "We manage the full transaction process with precision, protecting your interests at every stage.",
              },
              {
                title: "Exclusive Off-Market Access",
                description:
                  "Access to carefully selected properties that never reach the open market.",
              },
              {
                title: "Tailored Investment Advice",
                description:
                  "Strategic guidance aligned with your goals — whether primary residence or portfolio growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-sand-300 pt-6"
              >
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section
        id="contact"
        className="bg-charcoal py-24 text-white lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
                Get in Touch
              </p>
              <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                Begin Your Journey Home
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                Speak with one of our advisors. Whether you are searching for
                your next residence or evaluating an investment opportunity, we
                are ready to assist.
              </p>

              <div className="mt-10 space-y-5 text-sm">
                <div>
                  <p className="text-white/50">Address</p>
                  <p className="mt-1 text-white">
                    Msakato Street, Mbabane, Eswatini
                  </p>
                </div>
                <div>
                  <p className="text-white/50">WhatsApp</p>
                  <a
                    href="https://wa.me/26876780729"
                    className="mt-1 block text-white transition-colors hover:text-copper"
                  >
                    +268 7678 0729
                  </a>
                </div>
                <div>
                  <p className="text-white/50">Phone</p>
                  <a
                    href="tel:+26876022772"
                    className="mt-1 block text-white transition-colors hover:text-copper"
                  >
                    7602 2772
                  </a>
                </div>
                <div>
                  <p className="text-white/50">Email</p>
                  <a
                    href="mailto:info@ekhaya.co.sz"
                    className="mt-1 block text-white transition-colors hover:text-copper"
                  >
                    info@ekhaya.co.sz
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full rounded-sm bg-white/5 p-8 backdrop-blur-sm border border-white/10">
                <h3 className="font-serif text-2xl font-medium">
                  Request a Consultation
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Leave your details and an advisor will contact you shortly.
                </p>
                <form className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-white/50"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-white/50"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-white/50"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-sm border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-copper-600"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <span className="font-serif text-2xl font-medium">Ekhaya</span>
              <p className="mt-1 text-sm text-white/50">
                Properties · Eswatini
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm text-white/70">
              <a href="/#listings" className="hover:text-white">
                Listings
              </a>
              <a href="/#about" className="hover:text-white">
                About
              </a>
              <a href="/#contact" className="hover:text-white">
                Contact
              </a>
              <a
                href="https://wa.me/26876780729"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} Ekhaya Properties. All rights reserved.
            · Msakato Street, Mbabane, Eswatini
          </div>
        </div>
      </footer>
    </>
  );
}

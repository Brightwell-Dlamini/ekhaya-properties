import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Ekhaya Properties website and property information services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-copper">Legal</p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-charcoal">Terms of Use</h1>
          <p className="mt-4 text-sm text-charcoal/60">Last updated: 11 November 2026</p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="space-y-8 text-base leading-relaxed text-charcoal/80">
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">1. About these terms</h2>
            <p className="mt-3">These terms govern your use of the Ekhaya Properties website and any enquiries you submit through it. By using the site, you agree to these terms.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">2. Our role</h2>
            <p className="mt-3">Ekhaya Properties is a real estate agency / brokerage. We facilitate buying, selling, and renting of property. We are not the developer or owner of listed properties unless expressly stated. Property particulars are provided in good faith and should be verified independently.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">3. Property information</h2>
            <p className="mt-3">Listings, prices, availability, photographs, and descriptions may change without notice. Measurements are approximate. Nothing on this website constitutes a formal offer until confirmed in writing by us.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">4. Enquiries</h2>
            <p className="mt-3">When you submit an enquiry, you confirm that the information you provide is accurate. Our <Link href="/privacy" className="text-copper hover:underline">Privacy Policy</Link> explains how we handle personal data.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">5. Intellectual property</h2>
            <p className="mt-3">Content on this website is owned by or licensed to Ekhaya Properties. You may not copy or redistribute it for commercial purposes without prior written consent.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">6. Limitation of liability</h2>
            <p className="mt-3">To the fullest extent permitted by law, we are not liable for loss arising from reliance on information on this website. Nothing excludes liability that cannot be excluded under applicable law.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">7. Governing law</h2>
            <p className="mt-3">These terms are governed by the laws of the Kingdom of Eswatini.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">8. Contact</h2>
            <p className="mt-3">Ekhaya Properties · Msakato Street, Mbabane, Eswatini<br />Email: <a href="mailto:info@ekhaya.co.sz" className="text-copper hover:underline">info@ekhaya.co.sz</a><br />WhatsApp: +268 7678 0729 · Phone: 7602 2772</p>
          </section>
        </div>
        <p className="mt-12 text-sm text-charcoal/50"><Link href="/" className="text-copper hover:underline">← Back to home</Link></p>
      </article>
    </div>
  );
}

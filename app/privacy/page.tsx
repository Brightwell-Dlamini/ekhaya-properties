import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Ekhaya Properties — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-copper">
            Legal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-charcoal">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-charcoal/60">
            Last updated: 11 November 2026
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="space-y-8 text-base leading-relaxed text-charcoal/80">
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">1. Who we are</h2>
            <p className="mt-3">
              Ekhaya Properties (“we”, “us”, “our”) is a real estate agency based
              at Msakato Street, Mbabane, Eswatini. Contact:{" "}
              <a href="mailto:info@ekhaya.co.sz" className="text-copper hover:underline">info@ekhaya.co.sz</a>,
              WhatsApp +268 7678 0729, phone 7602 2772.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">2. Information we collect</h2>
            <p className="mt-3">When you use our website or contact us, we may collect:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Name, email address, and phone number you provide in forms</li>
              <li>Message content and property interest details</li>
              <li>Technical data such as browser type, device, and approximate location (via standard web logs or analytics, if enabled)</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">3. How we use your information</h2>
            <p className="mt-3">We use personal information to:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Respond to enquiries and arrange viewings</li>
              <li>Provide property advisory services you request</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">4. Sharing</h2>
            <p className="mt-3">
              We may share information with service providers who help us operate
              (for example email delivery or hosting), strictly as needed to
              perform those services, and with professional advisers or
              authorities where required by law.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">5. Retention</h2>
            <p className="mt-3">
              We retain enquiry and client records for as long as needed to
              provide services and meet legal, accounting, or reporting requirements.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">6. Your rights</h2>
            <p className="mt-3">
              Subject to applicable law, you may request access to, correction of,
              or deletion of personal information we hold about you. Contact us at{" "}
              <a href="mailto:info@ekhaya.co.sz" className="text-copper hover:underline">info@ekhaya.co.sz</a>.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">7. Security</h2>
            <p className="mt-3">
              We take reasonable technical and organisational measures to protect
              personal information. No method of transmission over the internet is completely secure.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-medium text-charcoal">8. Changes</h2>
            <p className="mt-3">
              We may update this policy from time to time. The “Last updated” date
              at the top of this page will be revised accordingly.
            </p>
          </section>
        </div>
        <p className="mt-12 text-sm text-charcoal/50">
          <Link href="/" className="text-copper hover:underline">← Back to home</Link>
        </p>
      </article>
    </div>
  );
}

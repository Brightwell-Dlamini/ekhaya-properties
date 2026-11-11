"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-charcoal sm:text-5xl">
              Begin Your Journey Home
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
              Speak with one of our advisors. Whether you are searching for
              your next residence or evaluating an investment opportunity, we
              are ready to assist.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div>
                <p className="text-charcoal/50">Address</p>
                <p className="mt-1 font-medium text-charcoal">
                  Msakato Street, Mbabane, Eswatini
                </p>
              </div>
              <div>
                <p className="text-charcoal/50">WhatsApp</p>
                <a
                  href="https://wa.me/26876780729"
                  className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper"
                >
                  +268 7678 0729
                </a>
              </div>
              <div>
                <p className="text-charcoal/50">Phone</p>
                <a
                  href="tel:+26876022772"
                  className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper"
                >
                  7602 2772
                </a>
              </div>
              <div>
                <p className="text-charcoal/50">Email</p>
                <a
                  href="mailto:info@ekhaya.co.sz"
                  className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper"
                >
                  info@ekhaya.co.sz
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-10 overflow-hidden rounded-sm border border-sand-200 shadow-sm">
              <iframe
                title="Ekhaya Properties location – Msakato Street, Mbabane"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0!2d31.1367!3d-26.3054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE4JzE5LjQiUyAzMcKwMDgnMTIuMSJF!5e0!3m2!1sen!2ssz!4v1700000000000!5m2!1sen!2ssz"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.05]"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-start"
          >
            <div className="w-full rounded-sm border border-sand-200 bg-white p-8 shadow-sm lg:p-10">
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Request a Consultation
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Leave your details and an advisor will contact you shortly.
              </p>
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-sm border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-sm border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-sm border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper"
                    placeholder="+268 ..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium tracking-wide uppercase text-charcoal/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-sm border border-sand-300 bg-sand-50 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-copper focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-copper px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-copper-600 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
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
              Speak with one of our advisors. Whether you are searching for your
              next residence or evaluating an investment opportunity, we are
              ready to assist.
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
                <a href="https://wa.me/26876780729" className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper">
                  +268 7678 0729
                </a>
              </div>
              <div>
                <p className="text-charcoal/50">Phone</p>
                <a href="tel:+26876022772" className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper">
                  7602 2772
                </a>
              </div>
              <div>
                <p className="text-charcoal/50">Email</p>
                <a href="mailto:info@ekhaya.co.sz" className="mt-1 block font-medium text-charcoal transition-colors hover:text-copper">
                  info@ekhaya.co.sz
                </a>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-sm border border-sand-200 shadow-sm">
              <iframe
                title="Ekhaya Properties — Msakato Street, Mbabane, Eswatini"
                src="https://maps.google.com/maps?q=Msakato%20Street%2C%20Mbabane%2C%20Eswatini&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />
            </div>
          </motion.div>

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
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

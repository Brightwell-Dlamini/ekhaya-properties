"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
              alt="Sweeping highland landscape of Eswatini"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
          </motion.div>

          {/* Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pl-4"
          >
            <p className="mb-4 text-sm font-medium tracking-[0.25em] uppercase text-copper">
              The Meaning of Ekhaya
            </p>
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-charcoal sm:text-5xl">
              More than a house.
              <br />
              <span className="italic text-charcoal/80">A place to belong.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/70 sm:text-lg">
              <p>
                In the language of Eswatini, <em className="font-medium text-charcoal">Ekhaya</em> means home — not merely a structure of walls and roof, but the warmth of belonging, the quiet pride of place, and the promise of a life well lived.
              </p>
              <p>
                We exist to connect discerning buyers, sellers, and investors with properties that feel right. Whether you seek a highland residence overlooking the Ezulwini Valley, a strategic commercial holding, or a serene plot of land, our role is advisory, precise, and deeply personal.
              </p>
              <p>
                As an independent agency, we bring local market fluency, discretion, and a commitment to clarity at every stage of the journey.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-sand-300 pt-8">
              <div>
                <p className="font-serif text-3xl font-medium text-charcoal">5.7K+</p>
                <p className="mt-1 text-sm text-charcoal/60">Social following</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-charcoal">Local</p>
                <p className="mt-1 text-sm text-charcoal/60">Eswatini market focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

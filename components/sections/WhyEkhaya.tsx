"use client";

import { motion } from "framer-motion";
import { MapPin, FileCheck, KeyRound, LineChart } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Market Experts",
    description:
      "Intimate knowledge of Mbabane, Ezulwini, Manzini and emerging corridors across the Kingdom.",
  },
  {
    icon: FileCheck,
    title: "Seamless Paperwork",
    description:
      "We manage the full transaction process with precision, protecting your interests at every stage.",
  },
  {
    icon: KeyRound,
    title: "Exclusive Off-Market Access",
    description:
      "Access to carefully selected properties that never reach the open market.",
  },
  {
    icon: LineChart,
    title: "Tailored Investment Advice",
    description:
      "Strategic guidance aligned with your goals — whether primary residence or portfolio growth.",
  },
];

export default function WhyEkhaya() {
  return (
    <section className="bg-sand-50 py-24 lg:py-32">
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

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-sm border border-sand-200 bg-white p-8 transition-shadow duration-500 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-sand-100 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

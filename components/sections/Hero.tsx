"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury modern home in Eswatini landscape"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4 text-sm font-medium tracking-[0.25em] uppercase text-copper"
            >
              Eswatini Real Estate Advisory
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Find Your{" "}
              <span className="italic text-sand-100">Ekhaya</span>.
              <br />
              Invest in Eswatini.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
            >
              Curated property advisory and exclusive listings in the heart of
              the Kingdom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-copper px-8 text-base hover:bg-copper-600"
              >
                <Link href="/#listings">Browse Listings</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 px-8 text-base text-white hover:bg-white/10"
              >
                <Link href="/#contact">Speak to an Agent</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-white/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-[1px] bg-gradient-to-b from-white/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

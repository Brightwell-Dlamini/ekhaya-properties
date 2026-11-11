"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Ekhaya guided us through the purchase of our family home in Ezulwini with exceptional care. Their knowledge of the local market and attention to detail made a complex process feel seamless.",
    name: "Thandi Nkosi",
    role: "Homeowner, Ezulwini",
  },
  {
    id: 2,
    quote:
      "As an investor based abroad, I needed an agency I could trust completely. The team provided clear advice, exclusive opportunities, and handled every step of the paperwork with professionalism.",
    name: "James Mokoena",
    role: "Property Investor",
  },
  {
    id: 3,
    quote:
      "From the first consultation to the final handover, the experience was refined and reassuring. They understood exactly what we were looking for and delivered beyond expectation.",
    name: "Lindiwe Dlamini",
    role: "Buyer, Mbabane",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-charcoal py-24 text-white lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative">
          <Quote className="absolute -top-4 left-0 h-10 w-10 text-copper/40" />

          <div className="relative min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="px-2"
              >
                <blockquote className="text-center">
                  <p className="font-serif text-xl leading-relaxed text-white/90 sm:text-2xl">
                    “{testimonials[current].quote}”
                  </p>
                  <footer className="mt-8">
                    <p className="text-base font-medium text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="mt-1 text-sm text-white/50">
                      {testimonials[current].role}
                    </p>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-copper hover:bg-copper"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "w-8 bg-copper"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-copper hover:bg-copper"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";
import { properties, type PropertyCategory } from "@/data/properties";

type FilterType = "All" | PropertyCategory;

const filters: FilterType[] = [
  "All",
  "Houses",
  "Apartments",
  "Commercial",
  "Land",
];

export default function PropertyGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filtered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.category === activeFilter);

  return (
    <section id="listings" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
              Curated Portfolio
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-charcoal sm:text-5xl">
              Featured Listings
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "bg-charcoal text-white shadow-sm"
                    : "bg-white text-charcoal/70 hover:bg-sand-200 hover:text-charcoal"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((property, index) => (
            <motion.article
              key={property.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <Link href={`/properties/${property.id}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4">
                    <span
                      className={cn(
                        "inline-block rounded-sm px-3 py-1 text-xs font-semibold tracking-wide uppercase",
                        property.type === "For Sale"
                          ? "bg-copper text-white"
                          : "bg-charcoal text-white"
                      )}
                    >
                      {property.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/40">
                    <span className="translate-y-4 rounded-sm bg-white px-6 py-2.5 text-sm font-medium text-charcoal opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View Details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-center gap-1.5 text-sm text-charcoal/60">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-medium leading-snug text-charcoal transition-colors group-hover:text-copper">
                    {property.title}
                  </h3>

                  <p className="mb-4 text-lg font-semibold tracking-tight text-charcoal">
                    {property.currency} {property.price}
                    {property.type === "To Let" && (
                      <span className="ml-1 text-sm font-normal text-charcoal/50">
                        / month
                      </span>
                    )}
                  </p>

                  <div className="flex items-center gap-4 border-t border-sand-200 pt-4 text-sm text-charcoal/60">
                    {property.beds !== undefined && (
                      <span className="flex items-center gap-1.5">
                        <Bed className="h-4 w-4" />
                        {property.beds}
                      </span>
                    )}
                    {property.baths !== undefined && (
                      <span className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4" />
                        {property.baths}
                      </span>
                    )}
                    {property.size && (
                      <span className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4" />
                        {property.size}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link
            href="/#listings"
            className="inline-flex items-center gap-2 border-b border-charcoal/30 pb-1 text-sm font-medium tracking-wide text-charcoal transition-colors hover:border-copper hover:text-copper"
          >
            View All Properties
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

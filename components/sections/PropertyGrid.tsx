"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

type PropertyType = "All" | "Houses" | "Apartments" | "Commercial" | "Land";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  currency: string;
  type: "For Sale" | "To Let";
  category: Exclude<PropertyType, "All">;
  beds?: number;
  baths?: number;
  size?: string;
  image: string;
}

const properties: Property[] = [
  {
    id: "1",
    title: "Contemporary Highland Residence",
    location: "Ezulwini Valley",
    price: "4,850,000",
    currency: "SZL",
    type: "For Sale",
    category: "Houses",
    beds: 4,
    baths: 3,
    size: "420 m²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Executive Apartment with Mountain Views",
    location: "Mbabane",
    price: "18,500",
    currency: "SZL",
    type: "To Let",
    category: "Apartments",
    beds: 2,
    baths: 2,
    size: "145 m²",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Prime Commercial Corner Site",
    location: "Manzini",
    price: "6,200,000",
    currency: "SZL",
    type: "For Sale",
    category: "Commercial",
    size: "1,200 m²",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Spacious Family Home on Acreage",
    location: "Malkerns",
    price: "3,950,000",
    currency: "SZL",
    type: "For Sale",
    category: "Houses",
    beds: 5,
    baths: 4,
    size: "380 m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Serviced Development Land",
    location: "Matsapha",
    price: "1,850,000",
    currency: "SZL",
    type: "For Sale",
    category: "Land",
    size: "2,500 m²",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Luxury Penthouse Suite",
    location: "Mbabane Central",
    price: "28,000",
    currency: "SZL",
    type: "To Let",
    category: "Apartments",
    beds: 3,
    baths: 2,
    size: "210 m²",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3be42?q=80&w=2070&auto=format&fit=crop",
  },
];

const filters: PropertyType[] = [
  "All",
  "Houses",
  "Apartments",
  "Commercial",
  "Land",
];

export default function PropertyGrid() {
  const [activeFilter, setActiveFilter] = useState<PropertyType>("All");

  const filtered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.category === activeFilter);

  return (
    <section id="listings" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
              Curated Portfolio
            </p>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-charcoal sm:text-5xl">
              Featured Listings
            </h2>
          </div>

          {/* Filters */}
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

        {/* Grid */}
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
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/40">
                  <Link
                    href={`/#property-${property.id}`}
                    className="translate-y-4 rounded-sm bg-white px-6 py-2.5 text-sm font-medium text-charcoal opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
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

                {/* Meta */}
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
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
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

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Search,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  properties,
  type PropertyCategory,
  type PropertyType,
} from "@/data/properties";

type CategoryFilter = "All" | PropertyCategory;
type StatusFilter = "All" | PropertyType;

const categoryFilters: CategoryFilter[] = [
  "All",
  "Houses",
  "Apartments",
  "Commercial",
  "Land",
];

const statusFilters: StatusFilter[] = ["All", "For Sale", "To Let"];

export default function PropertyGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return properties.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (status !== "All" && p.type !== status) return false;

      if (!q) return true;

      const haystack = [
        p.title,
        p.location,
        p.category,
        p.type,
        p.description,
        p.features.join(" "),
        p.agentNote ?? "",
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query, category, status]);

  const hasActiveFilters =
    query.trim().length > 0 || category !== "All" || status !== "All";

  const clearAll = () => {
    setQuery("");
    setCategory("All");
    setStatus("All");
  };

  return (
    <section id="listings" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-copper">
            Curated Portfolio
          </p>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-charcoal sm:text-5xl">
            Featured Listings
          </h2>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by location, property type, or keyword…"
              className="w-full rounded-sm border border-sand-300 bg-white py-3.5 pl-11 pr-10 text-sm text-charcoal placeholder:text-charcoal/40 transition-colors focus:border-copper focus:outline-none focus:ring-1 focus:ring-copper"
              aria-label="Search properties"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-charcoal/40 transition-colors hover:bg-sand-200 hover:text-charcoal"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowFilters((v) => !v)}
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-sm border px-5 py-3.5 text-sm font-medium transition-colors sm:w-auto",
              showFilters || hasActiveFilters
                ? "border-charcoal bg-charcoal text-white"
                : "border-sand-300 bg-white text-charcoal hover:border-charcoal/40"
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-copper px-1.5 text-[10px] font-semibold text-white">
                {[
                  query.trim() ? 1 : 0,
                  category !== "All" ? 1 : 0,
                  status !== "All" ? 1 : 0,
                ].reduce((a, b) => a + b, 0)}
              </span>
            )}
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mb-8 rounded-sm border border-sand-200 bg-white p-5 sm:p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-5">
                    <div>
                      <p className="mb-2.5 text-xs font-medium tracking-wide uppercase text-charcoal/50">
                        Status
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {statusFilters.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setStatus(s)}
                            className={cn(
                              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                              status === s
                                ? "bg-charcoal text-white"
                                : "bg-sand-100 text-charcoal/70 hover:bg-sand-200 hover:text-charcoal"
                            )}
                          >
                            {s === "All" ? "Any status" : s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2.5 text-xs font-medium tracking-wide uppercase text-charcoal/50">
                        Category
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {categoryFilters.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCategory(c)}
                            className={cn(
                              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                              category === c
                                ? "bg-charcoal text-white"
                                : "bg-sand-100 text-charcoal/70 hover:bg-sand-200 hover:text-charcoal"
                            )}
                          >
                            {c === "All" ? "All types" : c}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="shrink-0 text-sm font-medium text-copper transition-colors hover:text-copper-600"
                    >
                      Clear all
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-8 flex items-center justify-between text-sm text-charcoal/60">
          <p>
            {filtered.length === 0
              ? "No properties match your search"
              : `${filtered.length} propert${filtered.length === 1 ? "y" : "ies"}`}
            {hasActiveFilters && filtered.length > 0 && (
              <span className="text-charcoal/40"> matching your criteria</span>
            )}
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="font-medium text-copper transition-colors hover:text-copper-600 sm:hidden"
            >
              Clear
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((property, index) => (
                <motion.article
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
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
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-sm border border-sand-200 bg-white px-8 py-16 text-center">
            <Search className="mx-auto h-10 w-10 text-charcoal/20" />
            <h3 className="mt-4 font-serif text-xl font-medium text-charcoal">
              No matching properties
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Try a different location, keyword, or clear your filters.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-copper px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-copper-600"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

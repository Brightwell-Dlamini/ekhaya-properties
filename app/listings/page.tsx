import type { Metadata } from "next";
import { Suspense } from "react";
import PropertyGrid from "@/components/sections/PropertyGrid";

export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Browse curated homes, apartments, commercial property and land for sale and to let across Eswatini — Mbabane, Ezulwini, Manzini and beyond.",
};

export default function ListingsPage() {
  return (
    <div className="pt-20">
      <Suspense
        fallback={
          <div className="flex min-h-[40vh] items-center justify-center bg-sand-50 text-sm text-charcoal/50">
            Loading listings…
          </div>
        }
      >
        <PropertyGrid />
      </Suspense>
    </div>
  );
}

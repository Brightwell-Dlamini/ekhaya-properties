import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PropertyNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-sand-50 px-6 text-center">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-copper">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
        Property not found
      </h1>
      <p className="mt-4 max-w-md text-charcoal/70">
        The listing you are looking for may have been sold, let, or removed from
        our portfolio.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild className="bg-copper hover:bg-copper-600">
          <Link href="/#listings">Browse Listings</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}

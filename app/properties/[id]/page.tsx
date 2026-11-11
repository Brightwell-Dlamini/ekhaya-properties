import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  ArrowLeft,
  MessageCircle,
  Check,
} from "lucide-react";
import {
  getPropertyById,
  getAllPropertyIds,
  properties,
} from "@/data/properties";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getAllPropertyIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: `${property.title} | ${property.location}`,
    description: property.description.slice(0, 160),
    openGraph: {
      title: `${property.title} · Ekhaya Properties`,
      description: property.description.slice(0, 160),
      images: [{ url: property.images[0], width: 1200, height: 630 }],
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const related = properties
    .filter((p) => p.id !== property.id && p.category === property.category)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Ekhaya Properties, I am interested in: ${property.title} (${property.location}) – ${property.currency} ${property.price}. Please share more details.`
  );

  return (
    <div className="bg-white">
      <div className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:px-8">
          <Link
            href="/#listings"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 transition-colors hover:text-copper"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm lg:col-span-2 lg:aspect-auto lg:min-h-[480px]">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute left-4 top-4">
              <span
                className={cn(
                  "inline-block rounded-sm px-3 py-1.5 text-xs font-semibold tracking-wide uppercase",
                  property.type === "For Sale"
                    ? "bg-copper text-white"
                    : "bg-charcoal text-white"
                )}
              >
                {property.type}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-4">
            {property.images.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[230px]"
              >
                <Image
                  src={img}
                  alt={`${property.title} – view ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
            {property.images.length < 2 && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand-200 lg:min-h-[230px]" />
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="mb-2 flex items-center gap-1.5 text-sm text-charcoal/60">
              <MapPin className="h-3.5 w-3.5" />
              <span>{property.location}</span>
              <span className="mx-1.5 text-charcoal/30">·</span>
              <span className="text-charcoal/50">{property.category}</span>
            </div>

            <h1 className="font-serif text-3xl font-medium tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              {property.title}
            </h1>

            <p className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">
              {property.currency} {property.price}
              {property.type === "To Let" && (
                <span className="ml-1 text-base font-normal text-charcoal/50">
                  / month
                </span>
              )}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 border-y border-sand-200 py-6 text-sm text-charcoal/70">
              {property.beds !== undefined && (
                <span className="flex items-center gap-2">
                  <Bed className="h-4 w-4 text-copper" />
                  {property.beds} Bedroom{property.beds !== 1 ? "s" : ""}
                </span>
              )}
              {property.baths !== undefined && (
                <span className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-copper" />
                  {property.baths} Bathroom{property.baths !== 1 ? "s" : ""}
                </span>
              )}
              {property.size && (
                <span className="flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-copper" />
                  {property.size}
                </span>
              )}
              {property.plotSize && (
                <span className="flex items-center gap-2">
                  <Maximize className="h-4 w-4 text-copper" />
                  Plot {property.plotSize}
                </span>
              )}
              {property.yearBuilt && (
                <span className="text-charcoal/60">
                  Built {property.yearBuilt}
                </span>
              )}
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                About this property
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                {property.description}
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Features & Amenities
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-charcoal/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {property.agentNote && (
              <div className="mt-10 rounded-sm border border-copper/20 bg-copper/5 p-6">
                <p className="text-xs font-medium tracking-wide uppercase text-copper">
                  Agent note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {property.agentNote}
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-sm border border-sand-200 bg-sand-50 p-6 shadow-sm lg:p-8">
              <p className="text-sm font-medium tracking-wide uppercase text-charcoal/50">
                Interested in this property?
              </p>
              <p className="mt-2 font-serif text-xl font-medium text-charcoal">
                Speak with an advisor
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
                Our team can arrange a private viewing, share additional
                details, or answer any questions you may have.
              </p>

              <div className="mt-6 space-y-3">
                <Button asChild className="w-full bg-copper hover:bg-copper-600">
                  <a
                    href={`https://wa.me/26876780729?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Enquiry
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white"
                >
                  <a href="tel:+26876022772">Call 7602 2772</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full text-charcoal hover:bg-sand-200"
                >
                  <Link href="/#contact">Request a Viewing</Link>
                </Button>
              </div>

              <div className="mt-8 border-t border-sand-300 pt-6 text-xs text-charcoal/50">
                <p>Ekhaya Properties</p>
                <p className="mt-1">Msakato Street, Mbabane</p>
                <a
                  href="mailto:info@ekhaya.co.sz"
                  className="mt-1 block transition-colors hover:text-copper"
                >
                  info@ekhaya.co.sz
                </a>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-sand-200 pt-16">
            <h2 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
              Similar properties
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/properties/${p.id}`}
                  className="group overflow-hidden rounded-sm border border-sand-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute left-3 top-3">
                      <span
                        className={cn(
                          "rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                          p.type === "For Sale"
                            ? "bg-copper text-white"
                            : "bg-charcoal text-white"
                        )}
                      >
                        {p.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-charcoal/50">{p.location}</p>
                    <h3 className="mt-1 font-serif text-lg font-medium text-charcoal group-hover:text-copper">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-charcoal">
                      {p.currency} {p.price}
                      {p.type === "To Let" && (
                        <span className="font-normal text-charcoal/50">
                          {" "}
                          / month
                        </span>
                      )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

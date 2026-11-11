import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import PropertyGrid from "@/components/sections/PropertyGrid";
import About from "@/components/sections/About";
import WhyEkhaya from "@/components/sections/WhyEkhaya";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <div className="flex min-h-[30vh] items-center justify-center bg-sand-50 text-sm text-charcoal/50">
            Loading listings…
          </div>
        }
      >
        <PropertyGrid />
      </Suspense>
      <About />
      <WhyEkhaya />
      <Testimonials />
      <Contact />
    </>
  );
}

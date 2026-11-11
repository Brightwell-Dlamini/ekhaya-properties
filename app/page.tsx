import Hero from "@/components/sections/Hero";
import PropertyGrid from "@/components/sections/PropertyGrid";
import About from "@/components/sections/About";
import WhyEkhaya from "@/components/sections/WhyEkhaya";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertyGrid />
      <About />
      <WhyEkhaya />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

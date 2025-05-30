import AboutSection from "@/app/components/AboutSection";
import Hero from "@/app/components/hero";
import Nav from "@/app/components/nav";
import PricingSection from "@/app/components/PricingSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import Testimonials from "@/app/components/Testimonials";
import Gallery from "@/app/components/ui/heroUi/Gallery";
import ProgressCarousel from "@/app/components/ui/ProgressCarousel";
import React from "react";

export default function Acceuil() {
  return (
    <>
      <Hero />
      <div className="w-full px-4 md:px-16 lg:px-32">
        <Gallery />
        <Nav />
        <AboutSection />
        <PricingSection />
        <ProjectsSection />
        <Testimonials />
      </div>
      
    </>
  );
}

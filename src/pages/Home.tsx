import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesBento } from "../components/home/ServicesBento";
import { ProcessTimeline } from "../components/home/ProcessTimeline";
import { WhySection } from "../components/home/WhySection";
import { SectionHeading } from "../components/SectionHeading";
import { Highlight } from "../components/Highlight";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-navy-50">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-40">
          <SectionHeading
            title={
            <>
                Four service areas, <Highlight>one</Highlight> point of contact
              </>
            }
            intro="Whether you're establishing a company or maintaining a product portfolio, we cover the full regulatory lifecycle."
            action={
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-teal-600 hover:text-teal-700">
              
                All services
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            } />
          
          <div className="mt-16">
            <ServicesBento />
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <WhySection />
      <CtaBanner />
    </>);

}
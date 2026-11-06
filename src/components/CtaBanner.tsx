import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, PhoneIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { Highlight } from "./Highlight";
import { contact } from "../data/company";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {/* real photo background + soft dark veil */}
      <img
        src="./photos/cairo.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover grayscale contrast-110" />

      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-500/60 via-navy-600/75 to-navy-900/90" />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-32">
        {/* glass panel */}
        <div className="grid gap-10 rounded-[2.5rem] bg-white/10 p-8 ring-1 ring-white/30 backdrop-blur-xl [-webkit-backdrop-filter:blur(20px)] sm:p-12 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-16 lg:p-16">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] drop-shadow-sm sm:text-5xl lg:text-[4.25rem]">
              Ready to bring your product to the <Highlight dark>Egyptian</Highlight> market?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-white/90">
              Tell us what you're bringing to market. We'll outline the pathway, documents and realistic timelines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-teal-400 px-7 py-4 text-sm font-semibold text-navy-950 transition-colors duration-150 hover:bg-teal-300">

                Start a conversation
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
              </Link>
              <a
                href={contact.phones[0].href}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-7 py-4 text-sm font-semibold text-white ring-1 ring-white/40 transition-colors duration-150 hover:bg-white/20">

                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                {contact.phones[0].display}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

import React from "react";
import { Reveal } from "../components/Reveal";
import { Highlight } from "../components/Highlight";
import { GlowBackdrop } from "../components/GlowBackdrop";
import { Countdown } from "../components/Countdown";
import { NotifyForm } from "../components/NotifyForm";
import { Marquee } from "../components/Marquee";
import { ProductShapes } from "../components/Art";
import { categories, catalogueLaunch } from "../data/company";

export function Products() {
  return (
    <section className="mesh-light hero-light relative isolate flex min-h-screen flex-col overflow-hidden text-white">
      <GlowBackdrop />
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pb-24 pt-36 text-center sm:px-8 md:pt-48">
        <Reveal className="flex flex-col items-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-teal-200 ring-1 ring-white/15">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
            </span>
            Products catalogue
          </span>
          <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-[7.5rem]">
            Coming <Highlight dark>soon</Highlight>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
            We're preparing a catalogue of the products we represent and coordinate in Egypt. Leave your email and we'll let
            you know the moment it's live.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 flex w-full justify-center">
          <Countdown target={catalogueLaunch} />
        </Reveal>

        <Reveal delay={0.14} className="mt-12 w-full max-w-lg">
          <NotifyForm />
        </Reveal>

        <Reveal delay={0.2} className="mt-16 w-full">
          <ProductShapes />
        </Reveal>
      </div>

      <div className="strip-mid py-7">
        <Marquee items={categories} />
      </div>
    </section>);

}
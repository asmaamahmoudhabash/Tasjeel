import React from "react";
import { Reveal } from "./Reveal";
import { GlowBackdrop } from "./GlowBackdrop";

type PageHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  /** optional decorative illustration shown at the far side of the header (large screens) */
  art?: React.ReactNode;
  /** fill the whole screen height like the Home hero (default). Contact turns it off. */
  fullHeight?: boolean;
};

export function PageHeader({ eyebrow, title, intro, art, fullHeight = true }: PageHeaderProps) {
  return (
    <section className={`mesh-light hero-light relative isolate overflow-hidden text-white ${fullHeight ? "flex min-h-[100svh] flex-col justify-center" : ""}`}>
      <GlowBackdrop />
      {art &&
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 -z-10 hidden w-[44%] items-center justify-center lg:flex">
          {art}
        </div>
      }
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-40">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className={`mt-6 font-display text-5xl font-semibold leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem] ${art ? "max-w-3xl" : "max-w-5xl"}`}>
            {title}
          </h1>
          <p className={`mt-8 text-lg leading-relaxed text-white/65 md:text-xl ${art ? "max-w-xl" : "max-w-2xl"}`}>{intro}</p>
        </Reveal>
      </div>
    </section>);

}

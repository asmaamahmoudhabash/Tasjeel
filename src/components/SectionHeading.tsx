import React from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
  action?: React.ReactNode;
};

export function SectionHeading({ title, intro, dark = false, action }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <h2
          className={`font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl ${
          dark ? "text-white" : "text-navy-950"}`
          }>
          
          {title}
        </h2>
        {intro &&
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed md:text-xl ${dark ? "text-white/65" : "text-navy-600"}`}>
            {intro}
          </p>
        }
      </div>
      {action}
    </Reveal>);

}
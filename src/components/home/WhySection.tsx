import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, BellRingIcon, GraduationCapIcon, LandmarkIcon, LayersIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { Highlight } from "../Highlight";
import { reasons } from "../../data/company";

const icons = [LandmarkIcon, LayersIcon, GraduationCapIcon, BellRingIcon];
const tones = [
"from-teal-400 to-sky-500",
"from-navy-500 to-navy-800",
"from-sky-400 to-indigo-500",
"from-teal-500 to-navy-500"];


export function WhySection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-navy-50/70 to-white">
      <div aria-hidden="true" className="absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-teal-200/40 blur-[110px]" />
      <div aria-hidden="true" className="absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-sky-200/50 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 sm:px-8 md:py-40 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-navy-950 sm:text-5xl lg:text-6xl">
            Why work with <Highlight>Tasjeel</Highlight>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-600 md:text-xl">
            Regulatory work rewards experience. We know what each authority expects, which documents trigger queries, and
            how to keep your timeline moving.
          </p>
          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-800">

            Meet our team
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={r.title} className={i % 2 === 1 ? "sm:translate-y-8" : ""}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(21,84,172,0.35)] ring-1 ring-navy-100 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(21,84,172,0.5)] md:p-8">
                    <span
                      aria-hidden="true"
                      className="absolute end-6 top-4 font-display text-6xl font-semibold text-navy-100 transition-colors duration-300 group-hover:text-teal-200">

                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${tones[i % tones.length]}`}>
                      <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-navy-950 md:text-2xl">{r.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy-600">{r.text}</p>
                    <span aria-hidden="true" className={`mt-6 block h-1 w-12 rounded-full bg-gradient-to-r transition-[width] duration-300 group-hover:w-24 ${tones[i % tones.length]}`} />
                  </div>
                </Reveal>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}

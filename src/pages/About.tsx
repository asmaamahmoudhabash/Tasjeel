import React from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Highlight } from "../components/Highlight";
import { SectionHeading } from "../components/SectionHeading";
import { Counter } from "../components/Counter";
import { CtaBanner } from "../components/CtaBanner";
import { ShieldCheckIcon, TargetIcon, HandshakeIcon } from "lucide-react";
import { AboutArt } from "../components/AboutArt";
import { values, authorities, stats } from "../data/company";

const valueIcons = [TargetIcon, ShieldCheckIcon, HandshakeIcon];
const valueTones = ["from-teal-400 to-sky-500", "from-navy-500 to-navy-800", "from-sky-400 to-indigo-500"];

const ABOUT_IMAGE = "./3625e3f5-249e-45a2-9be0-ae8dc36dad6f.jpg";

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
        <>
            More than <Highlight dark>15 years</Highlight> in regulatory affairs
          </>
        }
        intro="Tasjeel Regulatory Office is a Cairo-based consultancy helping local and international companies bring safe, compliant products to the Egyptian market."
        art={<AboutArt />} />
      

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-40">
          <Reveal>
            <p className="max-w-5xl font-display text-3xl font-medium leading-[1.12] tracking-[-0.03em] text-navy-950 md:text-5xl lg:text-[3.5rem]">
              We've spent more than fifteen years turning Egypt's regulatory requirements into <Highlight>approvals</Highlight>{" "}
              — for pharmaceuticals, cosmetics, medical devices and food supplements.
            </p>
          </Reveal>

          <div className="mt-20 grid items-center gap-14 lg:mt-28 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <Reveal className="relative">
              <img
                src={ABOUT_IMAGE}
                alt="Pharmaceutical quality laboratory with organised samples and documentation"
                className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
              
              <div className="glass gradient-border !absolute bottom-5 left-5 rounded-3xl !bg-navy-950/60 px-6 py-5 text-white backdrop-blur-md sm:bottom-8 sm:left-8">
                <p className="font-display text-5xl font-semibold tracking-[-0.05em]">
                  <Counter to={15} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-white/70">Years with EDA & NFSA</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="space-y-5 text-lg leading-relaxed text-navy-600">
                <p>
                  Our team has prepared dossiers, secured licences and resolved authority queries across pharmaceuticals,
                  cosmetics, medical devices, veterinary products and food supplements.
                </p>
                <p>
                  That experience means fewer surprises. We plan each submission around what the Egyptian Drug Authority and
                  the National Food Safety Authority actually require — and we stay on the file until it's approved.
                </p>
              </div>

            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers band: photo + glass cards */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <img src={ABOUT_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-700/90 via-navy-800/85 to-navy-950/90" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((st, i) =>
            <li key={st.label}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-3xl bg-white/10 p-7 text-center ring-1 ring-white/30 sm:text-start backdrop-blur-md [-webkit-backdrop-filter:blur(14px)]">
                    <p className="font-display text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
                      <Counter to={st.value} suffix={st.suffix} />
                    </p>
                    <p className="mt-3 text-sm font-medium text-white/85">{st.label}</p>
                  </div>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-navy-50">
        <div aria-hidden="true" className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-teal-200/40 blur-[100px]" />
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
          <SectionHeading
            title={
            <>
                What we <Highlight>stand</Highlight> for
              </>
            } />

          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <li key={v.title}>
                  <Reveal delay={i * 0.07} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_-35px_rgba(21,84,172,0.45)] ring-1 ring-navy-100 transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_35px_80px_-35px_rgba(21,84,172,0.6)] md:p-10">
                      <span aria-hidden="true" className="absolute end-7 top-5 font-display text-7xl font-semibold text-navy-100 transition-colors duration-300 group-hover:text-teal-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${valueTones[i % valueTones.length]}`}>
                        <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.02em] text-navy-950">{v.title}</h3>
                      <p className="mt-3 text-lg leading-relaxed text-navy-600">{v.text}</p>
                    </div>
                  </Reveal>
                </li>);

            })}
          </ul>
        </div>
      </section>

      {/* Authorities */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-40">
          <SectionHeading
            title={
            <>
                The authorities we <Highlight>work</Highlight> with
              </>
            } />
          
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {authorities.map((a, i) =>
            <Reveal key={a.abbr} delay={i * 0.06} className="h-full">
                <div className="gradient-border-light flex h-full flex-col rounded-[2rem] bg-white p-8 md:p-12">
                  <p className="font-display text-7xl font-semibold tracking-[-0.05em] text-navy-950 md:text-8xl">{a.abbr}</p>
                  <h3 className="mt-4 text-lg font-semibold text-teal-600">{a.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-navy-600">{a.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>);

}
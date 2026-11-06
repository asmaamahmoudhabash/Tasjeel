import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Highlight } from "../components/Highlight";
import { CtaBanner } from "../components/CtaBanner";
import { ServicesCollage } from "../components/ServicesCollage";
import { services } from "../data/services";
import { useActiveSection } from "../hooks/useActiveSection";

const serviceIds = services.map((s) => s.id);

// One real photo per service (shown with a glass panel on top)
const photos: Record<string, string> = {
  "company-establishment": "./photos/company.jpg",
  "product-registration": "./photos/registration.jpg",
  "licensing": "./photos/licensing.jpg",
  "toll-manufacturing": "./photos/manufacturing.jpg"
};
const pad = (n: number) => String(n).padStart(2, "0");

export function Services() {
  const active = useActiveSection(serviceIds);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
        <>
            Regulatory support from company setup to <Highlight dark>market</Highlight>
          </>
        }
        intro="Four integrated service areas covering everything you need to establish, register, license and manufacture in Egypt."
        art={<ServicesCollage />} />
      

      {/* Mobile / tablet service bar */}
      <nav aria-label="Service areas" className="sticky top-[72px] z-30 border-b border-navy-100 bg-white/90 backdrop-blur-xl lg:hidden">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden">
          {services.map((s, i) =>
          <li key={s.id}>
              <Link
              to={`/services#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
              active === s.id ? "bg-navy-950 text-white" : "text-navy-600 hover:bg-navy-50"}`
              }>
              
                <span className={active === s.id ? "text-teal-300" : "text-navy-300"}>{pad(i + 1)}</span>
                {s.title}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-[19rem_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="Service areas" className="sticky top-28 py-28">
            <p className="px-4 text-sm font-semibold text-navy-400">Service areas</p>
            <ul className="mt-4 space-y-3">
              {services.map((s, i) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <Link
                      to={`/services#${s.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative flex items-center gap-3 rounded-2xl px-5 py-4 transition-[color,box-shadow,transform] duration-200 ${
                      isActive ?
                      "text-white shadow-[0_14px_30px_-12px_rgba(14,140,230,0.65)]" :
                      "bg-white text-[#6b819a] shadow-[0_2px_10px_-4px_rgba(21,84,172,0.15)] hover:-translate-y-0.5 hover:text-navy-900 hover:shadow-[0_10px_24px_-12px_rgba(21,84,172,0.35)]"}`
                      }>

                      {isActive &&
                      <motion.span
                        layoutId="service-nav-active"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2196E8] to-[#2BB5FF]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }} />

                      }
                      <span aria-hidden="true" className={`relative h-2 w-2 shrink-0 rounded-full ${isActive ? "bg-white" : "bg-sky-300"}`} />
                      <span className="relative flex-1 text-sm font-semibold leading-snug">{s.title}</span>
                      <span className={`relative flex h-7 min-w-[1.75rem] shrink-0 items-center justify-center rounded-full px-2 text-xs font-bold tabular-nums ${isActive ? "bg-white/25 text-white" : "bg-sky-50 text-sky-600"}`}>
                        {i + 1}
                      </span>
                    </Link>
                  </li>);

              })}
            </ul>
            <Link
              to="/contact"
              className="group mt-10 flex items-center justify-between rounded-2xl bg-teal-50 px-5 py-4 text-sm font-semibold text-teal-700 transition-colors duration-150 hover:bg-teal-100">
              
              Not sure where to start?
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
            </Link>
          </nav>
        </aside>

        <div>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="border-b border-navy-100 py-20 last:border-b-0 md:py-28">
                
                <Reveal>
                  <div className="flex items-end justify-between gap-6">
                    <span className="text-outline font-display text-[6rem] font-semibold leading-[0.8] tracking-[-0.06em] md:text-[9rem]" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                    <span className="gradient-border flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-teal-300 md:h-20 md:w-20">
                      <Icon className="h-8 w-8 md:h-9 md:w-9" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="relative isolate mt-10 flex min-h-[22rem] items-end overflow-hidden rounded-[2rem] p-5 shadow-[0_40px_80px_-40px_rgba(13,51,104,0.6)] md:min-h-[28rem] md:p-8">
                    <img src={photos[s.id]} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/65 via-navy-950/15 to-navy-950/5" />
                    <div className="max-w-2xl rounded-3xl bg-white/15 p-6 text-white ring-1 ring-white/35 backdrop-blur-md [-webkit-backdrop-filter:blur(14px)] md:p-8">
                      <h2 id={`${s.id}-title`} className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
                        {s.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-white/90">{s.description}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.06}>
                  <h3 className="mt-12 text-sm font-semibold text-navy-950">What we cover</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {s.items.map((item) =>
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-navy-50 px-5 py-4 text-sm font-medium text-navy-800">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-400 text-white">
                          <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    )}
                  </ul>
                  <Link
                    to="/contact"
                    className="group mt-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-800">
                    
                    Discuss this service
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
                  </Link>
                </Reveal>
              </section>);

          })}
        </div>
      </div>

      <CtaBanner />
    </>);

}
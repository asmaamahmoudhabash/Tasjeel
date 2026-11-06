import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Highlight } from "../Highlight";
import { processSteps } from "../../data/company";

export function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute -right-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-teal-500/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-40">
        <SectionHeading
          dark
          title={
          <>
              How we <Highlight dark>work</Highlight>
            </>
          }
          intro="A clear, five-step path from the first conversation to your product on the shelf." />
        

        <div className="relative mt-20">
          {/* Connector: vertical on mobile, horizontal and drawn-on-scroll on desktop */}
          <div aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px bg-white/10 lg:hidden" />
          <div aria-hidden="true" className="absolute left-7 right-7 top-7 hidden h-px bg-white/10 lg:block" />
          <motion.div
            aria-hidden="true"
            className="absolute left-7 right-7 top-7 hidden h-px origin-left bg-teal-300/70 lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }} />
          

          <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              const last = i === processSteps.length - 1;
              return (
                <motion.li
                  key={step.title}
                  className="relative flex gap-6 lg:flex-col lg:gap-0"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.08, ease: [0.23, 1, 0.32, 1] }}>
                  
                  <span
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-[0_0_0_8px_theme(colors.navy.950)] ${
                    last ? "bg-teal-400 text-navy-950" : "bg-navy-900 text-teal-300 ring-1 ring-teal-300/40"}`
                    }>
                    
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="pt-1 lg:mt-8 lg:pr-4 lg:pt-0">
                    <p className="text-xs font-semibold text-teal-300">Step {i + 1}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.02em]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{step.text}</p>
                  </div>
                </motion.li>);

            })}
          </ol>
        </div>
      </div>
    </section>);

}
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { Counter } from "../Counter";
import { Marquee } from "../Marquee";
import { Highlight } from "../Highlight";
import { GlowBackdrop } from "../GlowBackdrop";
import { ApprovalCard } from "./ApprovalCard";
import { HeroArt } from "../Art";
import { stats, approvals, categories } from "../../data/company";

const ease = [0.23, 1, 0.32, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease }
  });

  return (
    <section className="mesh-light hero-light relative isolate overflow-hidden text-white">
      <GlowBackdrop />

      <div className="mx-auto max-w-7xl px-5 pt-32 sm:px-8 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
          <div>
            <motion.p {...enter(0)} className="flex items-center gap-2 text-sm font-medium text-teal-200">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
              Regulatory affairs consultancy · Cairo, Egypt
            </motion.p>
            <motion.h1
              {...enter(0.05)}
              className="mt-6 font-display text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl xl:text-[5rem]">
              
              Your regulatory <Highlight dark>partner</Highlight> for the Egyptian market
            </motion.h1>
            <motion.p {...enter(0.1)} className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              Tasjeel guides pharmaceutical, cosmetic, medical device and food supplement companies through every step with
              the Egyptian Drug Authority and the National Food Safety Authority.
            </motion.p>
            <motion.div {...enter(0.15)} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-teal-400 px-7 py-4 text-sm font-semibold text-navy-950 transition-colors duration-150 hover:bg-teal-300">
                
                Book a consultation
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-7 py-4 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors duration-150 hover:bg-white/10">
                
                Explore our services
              </Link>
            </motion.div>
          </div>

          <div className="relative flex flex-col gap-5 lg:py-8" aria-label="Recent approvals">
            <HeroArt />
            <motion.div {...enter(0.2)}>
              <ApprovalCard {...approvals[0]} className="card-tone-a motion-safe:animate-float" />
            </motion.div>
            <motion.div {...enter(0.28)} className="sm:ml-auto lg:-mr-2">
              <ApprovalCard {...approvals[1]} className="card-tone-b motion-safe:animate-float motion-safe:[animation-delay:-3.5s]" />
            </motion.div>
          </div>
        </div>

        <dl className="mt-20 grid divide-y divide-white/10 border-t border-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0 lg:mt-28">
          {stats.map((s) =>
          <div key={s.label} className="py-8 text-center sm:px-6 sm:py-12 sm:text-start sm:first:pl-0">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-6xl font-semibold tracking-[-0.05em] lg:text-7xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-3 block text-sm text-white/60">{s.label}</span>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <div className="strip-dark py-7">
        <Marquee items={categories} />
      </div>
    </section>);

}
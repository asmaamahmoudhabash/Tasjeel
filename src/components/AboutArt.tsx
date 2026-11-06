import React from "react";
import { LogoMark } from "./Logo";

const chip = "absolute rounded-2xl bg-white/75 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(13,51,104,0.5)] ring-1 ring-white backdrop-blur-md motion-safe:animate-float";

/* About page hero: the shield logo on a medallion, surrounded by floating glass badges */
export function AboutArt() {
  return (
    <div className="relative h-[27rem] w-[27rem] max-w-full">
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-teal-300" />
      <div className="absolute inset-0 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute inset-[4.5rem] flex items-center justify-center rounded-full bg-gradient-to-br from-white to-teal-100 shadow-[0_40px_80px_-30px_rgba(13,51,104,0.55)] ring-8 ring-white/70">
        <LogoMark className="h-36 w-36 drop-shadow-xl" />
      </div>

      <div className={`${chip} start-0 top-10`}>
        <p className="font-display text-3xl font-semibold leading-none text-navy-950">15+</p>
        <p className="mt-1 text-xs font-medium text-navy-600">Years of regulatory experience</p>
      </div>

      <div className={`${chip} bottom-12 end-0`} style={{ animationDelay: "-3s" }}>
        <p className="font-display text-3xl font-semibold leading-none text-navy-950">200+</p>
        <p className="mt-1 text-xs font-medium text-navy-600">Clients served</p>
      </div>

      <span
        className="absolute end-6 top-16 rounded-full bg-gradient-to-br from-navy-500 to-navy-800 px-5 py-2 font-display text-lg font-semibold shadow-xl motion-safe:animate-float"
        style={{ color: "#ffffff", animationDelay: "-1.5s" }}>
        EDA
      </span>
      <span
        className="absolute bottom-6 start-10 rounded-full bg-gradient-to-br from-teal-400 to-sky-500 px-5 py-2 font-display text-lg font-semibold shadow-xl motion-safe:animate-float"
        style={{ color: "#ffffff", animationDelay: "-4.5s" }}>
        NFSA
      </span>
    </div>);

}

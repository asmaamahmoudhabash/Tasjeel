import React from "react";

type GlowBackdropProps = {grid?: boolean;};

export function GlowBackdrop({ grid = true }: GlowBackdropProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {grid && <div className="grid-lines absolute inset-0" />}
      <div className="absolute -left-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-teal-400/25 blur-[120px] motion-safe:animate-orb" />
      <div className="absolute -right-48 top-1/4 h-[36rem] w-[36rem] rounded-full bg-teal-500/20 blur-[140px] motion-safe:animate-orb [animation-delay:-8s]" />
      <div className="absolute -bottom-56 left-1/3 h-[28rem] w-[28rem] rounded-full bg-navy-400/30 blur-[120px]" />
    </div>);

}
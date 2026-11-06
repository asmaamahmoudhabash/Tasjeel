import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCountdown } from "../hooks/useCountdown";

type CountdownProps = {target: string;};

export function Countdown({ target }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(target);
  const units = [
  { label: "Days", value: days },
  { label: "Hours", value: hours },
  { label: "Minutes", value: minutes },
  { label: "Seconds", value: seconds }];


  return (
    <div
      className="grid w-full max-w-3xl grid-cols-4 gap-2.5 sm:gap-4"
      role="timer"
      aria-label={`${days} days, ${hours} hours and ${minutes} minutes until launch`}>
      
      {units.map((u) =>
      <div key={u.label} className="glass gradient-border rounded-2xl px-2 py-5 sm:rounded-3xl sm:py-8">
          <Digit value={String(u.value).padStart(2, "0")} />
          <p className="mt-2 text-[11px] font-medium text-white/55 sm:mt-3 sm:text-sm">{u.label}</p>
        </div>
      )}
    </div>);

}

function Digit({ value }: {value: string;}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-10 overflow-hidden sm:h-16 md:h-20" aria-hidden="true">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={value}
          className="absolute inset-0 flex items-center justify-center font-display text-3xl font-semibold tabular-nums tracking-[-0.04em] text-white sm:text-6xl md:text-7xl"
          initial={reduce ? false : { y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "-60%", opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
          
          {value}
        </motion.span>
      </AnimatePresence>
    </div>);

}
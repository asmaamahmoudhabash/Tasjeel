import React from "react";

type MarqueeProps = {items: string[];};

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  const row = (hidden: boolean) =>
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {doubled.map((item, i) =>
    <li key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-display text-2xl font-medium tracking-[-0.02em] text-white/70 md:px-12 md:text-3xl">
            {item}
          </span>
          <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-teal-300/70" />
        </li>
    )}
    </ul>;


  return (
    <div dir="ltr" className="relative flex overflow-hidden [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max motion-safe:animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>);

}
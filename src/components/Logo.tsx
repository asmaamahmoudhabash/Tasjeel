import React, { useId } from "react";

type LogoProps = {inverted?: boolean;};

/* Tasjeel mark: a shield (protection / approval) holding a "T", with a verified tick. */
export function LogoMark({ className = "h-10 w-10" }: {className?: string;}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="8" y1="4" x2="40" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1A66D1" />
          <stop offset="0.55" stopColor="#1554AC" />
          <stop offset="1" stopColor="#0D3368" />
        </linearGradient>
      </defs>
      <path d="M24 2.5 42.5 9.2v13c0 11.2-7.6 19.7-18.5 23.3C13.1 41.9 5.5 33.4 5.5 22.2V9.2z" fill={`url(#g${id})`} />
      <path d="M24 2.5 42.5 9.2v6.3L24 8.8 5.5 15.5V9.2z" fill="#ffffff" fillOpacity="0.12" />
      <rect x="13.5" y="14" width="21" height="6" rx="3" fill="#ffffff" />
      <rect x="21" y="14" width="6" height="19" rx="3" fill="#ffffff" />
      <circle cx="35" cy="35" r="9" fill="#ffffff" />
      <circle cx="35" cy="35" r="7" fill="#3CDDC7" />
      <path d="M31.2 35.2l2.8 3 4.9-5.6" fill="none" stroke="#0D3368" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

export function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold tracking-[-0.02em] ${inverted ? "text-white" : "text-navy-950"}`}>
          Tasjeel
        </span>
        <span className={`mt-1 text-[11px] font-medium ${inverted ? "text-white/55" : "text-navy-500"}`}>
          Regulatory Office
        </span>
      </span>
    </span>);

}

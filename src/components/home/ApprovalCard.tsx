import React from "react";
import { BadgeCheckIcon } from "lucide-react";

type ApprovalCardProps = {
  abbr: string;
  name: string;
  type: string;
  steps: string[];
  className?: string;
};

export function ApprovalCard({ abbr, name, type, steps, className = "" }: ApprovalCardProps) {
  return (
    <div className={`glass gradient-border w-full rounded-3xl p-6 sm:w-[22rem] ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">{abbr}</p>
          <p className="mt-1 text-sm text-white/60">{name}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-400/15 px-3 py-1 text-xs font-semibold text-teal-200 ring-1 ring-teal-300/30">
          <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Approved
        </span>
      </div>
      <ol className="mt-6 grid grid-cols-3 gap-1.5">
        {steps.map((s) =>
        <li key={s}>
            <div className="h-1.5 rounded-full bg-teal-300" />
            <p className="mt-2 text-[11px] font-medium text-white/60">{s}</p>
          </li>
        )}
      </ol>
      <p className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-white/85">{type}</p>
    </div>);

}
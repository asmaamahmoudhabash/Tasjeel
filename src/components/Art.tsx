import React from "react";

/* Decorative illustrations (inline SVG, coloured with the site palette) */

const float = "motion-safe:animate-float";

export function HeroArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 640"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute -inset-8 -z-10 h-[calc(100%+4rem)] w-[calc(100%+4rem)]">
      <circle cx="260" cy="320" r="215" fill="none" strokeWidth="2" strokeDasharray="4 10" className="stroke-teal-300" />
      <circle cx="260" cy="320" r="150" className="fill-teal-100/60" />

      {/* capsule top-left */}
      <g className={float}>
        <g transform="translate(40 70) rotate(-32 70 26)">
          <rect width="140" height="52" rx="26" className="fill-white stroke-navy-200" strokeWidth="2" />
          <path d="M26 0h44v52H26a26 26 0 0 1 0-52z" className="fill-teal-400" />
          <rect x="16" y="10" width="40" height="8" rx="4" className="fill-white/50" />
        </g>
      </g>

      {/* capsule bottom-right */}
      <g className={float} style={{ animationDelay: "-3s" }}>
        <g transform="translate(350 520) rotate(28 70 26)">
          <rect width="140" height="52" rx="26" className="fill-white stroke-navy-200" strokeWidth="2" />
          <path d="M114 0H70v52h44a26 26 0 0 0 0-52z" className="fill-navy-500" />
          <rect x="84" y="10" width="40" height="8" rx="4" className="fill-white/40" />
        </g>
      </g>

      {/* round tablet */}
      <g className={float} style={{ animationDelay: "-1.5s" }}>
        <circle cx="448" cy="84" r="30" className="fill-white stroke-navy-200" strokeWidth="2" />
        <path d="M418 84h60" className="stroke-navy-200" strokeWidth="2" />
        <circle cx="448" cy="84" r="30" className="fill-teal-200/40" />
      </g>

      {/* shield with check */}
      <g className={float} style={{ animationDelay: "-4.5s" }}>
        <path d="M58 300l44-16 44 16v44c0 30-20 52-44 62-24-10-44-32-44-62z" className="fill-teal-400" />
        <path d="M80 346l16 16 30-34" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* document */}
      <g className={float} style={{ animationDelay: "-2.2s" }}>
        <g transform="translate(404 380) rotate(10 40 50)">
          <rect width="84" height="104" rx="12" className="fill-white stroke-navy-200" strokeWidth="2" />
          <rect x="16" y="22" width="52" height="8" rx="4" className="fill-navy-200" />
          <rect x="16" y="42" width="52" height="8" rx="4" className="fill-navy-100" />
          <rect x="16" y="62" width="34" height="8" rx="4" className="fill-navy-100" />
          <circle cx="62" cy="82" r="12" className="fill-teal-400" />
          <path d="M56 82l4 4 8-9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* molecule */}
      <g className="stroke-navy-300" strokeWidth="3" fill="none">
        <path d="M70 540l44-34 48 22" />
        <path d="M114 506l-6-48" />
      </g>
      <circle cx="70" cy="540" r="12" className="fill-navy-500" />
      <circle cx="114" cy="506" r="16" className="fill-teal-400" />
      <circle cx="162" cy="528" r="10" className="fill-navy-300" />
      <circle cx="108" cy="458" r="9" className="fill-teal-200" />

      {/* plus signs + dots */}
      <g className="stroke-teal-400" strokeWidth="5" strokeLinecap="round">
        <path d="M250 28v28M236 42h28" />
        <path d="M478 252v22M467 263h22" />
        <path d="M30 210v22M19 221h22" />
      </g>
      <circle cx="330" cy="610" r="7" className="fill-teal-300" />
      <circle cx="190" cy="30" r="6" className="fill-navy-300" />
      <circle cx="500" cy="190" r="5" className="fill-teal-300" />
    </svg>);

}

export function ProductShapes() {
  const dash = { strokeDasharray: "7 7", strokeWidth: 2.5 } as const;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 860 190"
      className="mx-auto h-auto w-full max-w-3xl">
      {/* bottle */}
      <g transform="translate(30 10)" className="stroke-teal-500" {...dash}>
        <rect x="34" y="0" width="32" height="26" rx="6" className="fill-teal-100" />
        <rect x="12" y="26" width="76" height="140" rx="22" className="fill-white" />
        <rect x="22" y="70" width="56" height="50" rx="8" className="fill-teal-50" />
      </g>
      {/* box */}
      <g transform="translate(180 30)" className="stroke-navy-400" {...dash}>
        <rect width="120" height="130" rx="12" className="fill-white" />
        <rect width="120" height="34" rx="12" className="fill-navy-100" />
        <path d="M60 62v52M34 88h52" strokeWidth="6" strokeLinecap="round" className="stroke-teal-500" strokeDasharray="0" />
      </g>
      {/* tube */}
      <g transform="translate(345 12)" className="stroke-teal-500" {...dash}>
        <rect x="26" y="0" width="38" height="22" rx="6" className="fill-teal-200" />
        <path d="M6 24h78l-10 124H16z" className="fill-white" />
        <path d="M14 140h62l-2 20H16z" className="fill-teal-100" />
      </g>
      {/* jar */}
      <g transform="translate(490 38)" className="stroke-navy-400" {...dash}>
        <rect x="6" y="0" width="108" height="34" rx="10" className="fill-navy-100" />
        <rect x="0" y="34" width="120" height="102" rx="22" className="fill-white" />
        <rect x="20" y="62" width="80" height="44" rx="10" className="fill-teal-50" />
      </g>
      {/* blister pack */}
      <g transform="translate(655 28)" className="stroke-teal-500" {...dash}>
        <rect width="160" height="130" rx="16" className="fill-white" />
        {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) =>
        <circle key={`${r}-${c}`} cx={36 + c * 44} cy={32 + r * 34} r="12" className="fill-teal-100" />
        )
        )}
      </g>
    </svg>);

}

type ArtProps = {id: string;};

export function ServiceArt({ id }: ArtProps) {
  return (
    <div
      aria-hidden="true"
      className="mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-50 via-white to-teal-50 ring-1 ring-navy-100">
      <svg viewBox="0 0 800 260" className="h-auto w-full">
        <circle cx="660" cy="40" r="120" className="fill-teal-100/70" />
        <circle cx="90" cy="230" r="90" className="fill-navy-100/70" />
        {id === "company-establishment" && <CompanyScene />}
        {id === "product-registration" && <RegistrationScene />}
        {id === "licensing" && <LicensingScene />}
        {id === "toll-manufacturing" && <FactoryScene />}
      </svg>
    </div>);

}

export function ServiceBackdrop({ id }: ArtProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 260"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52%] w-full opacity-60 [-webkit-mask-image:linear-gradient(to_bottom,#000_25%,transparent_92%)] [mask-image:linear-gradient(to_bottom,#000_25%,transparent_92%)]">
      <circle cx="650" cy="50" r="120" className="fill-teal-100/70" />
      <circle cx="90" cy="230" r="90" className="fill-navy-100/70" />
      {id === "company-establishment" && <CompanyScene />}
      {id === "product-registration" && <RegistrationScene />}
      {id === "licensing" && <LicensingScene />}
      {id === "toll-manufacturing" && <FactoryScene />}
    </svg>);

}

function Ground() {
  return <rect x="0" y="220" width="800" height="40" className="fill-navy-100" />;
}

function CompanyScene() {
  const windows = (x: number, y: number, rows: number, cols: number) =>
  Array.from({ length: rows * cols }, (_, i) =>
  <rect key={i} x={x + (i % cols) * 26} y={y + Math.floor(i / cols) * 30} width="14" height="16" rx="3" className="fill-teal-200" />
  );
  return (
    <g>
      <Ground />
      <rect x="170" y="90" width="140" height="130" rx="8" className="fill-navy-500" />
      {windows(190, 110, 3, 4)}
      <rect x="330" y="40" width="150" height="180" rx="8" className="fill-navy-700" />
      {windows(350, 62, 4, 4)}
      <rect x="400" y="180" width="26" height="40" rx="4" className="fill-teal-400" />
      <rect x="500" y="110" width="120" height="110" rx="8" className="fill-navy-400" />
      {windows(518, 128, 3, 3)}
      <path d="M404 40V10" className="stroke-navy-950" strokeWidth="4" strokeLinecap="round" />
      <path d="M404 10h38l-8 12 8 12h-38z" className="fill-teal-400" />
    </g>);

}

function RegistrationScene() {
  return (
    <g>
      <Ground />
      <g transform="translate(250 50) rotate(-6 60 80)">
        <rect width="150" height="180" rx="14" className="fill-white stroke-navy-200" strokeWidth="2" />
        <rect x="20" y="28" width="90" height="10" rx="5" className="fill-navy-200" />
        <rect x="20" y="54" width="110" height="9" rx="4.5" className="fill-navy-100" />
        <rect x="20" y="76" width="110" height="9" rx="4.5" className="fill-navy-100" />
        <rect x="20" y="98" width="70" height="9" rx="4.5" className="fill-navy-100" />
      </g>
      <g transform="translate(330 38) rotate(5 70 90)">
        <rect width="160" height="190" rx="14" className="fill-white stroke-navy-300" strokeWidth="2" />
        <rect x="22" y="30" width="96" height="11" rx="5.5" className="fill-navy-300" />
        <rect x="22" y="58" width="116" height="9" rx="4.5" className="fill-navy-100" />
        <rect x="22" y="80" width="116" height="9" rx="4.5" className="fill-navy-100" />
        <rect x="22" y="102" width="80" height="9" rx="4.5" className="fill-navy-100" />
        <circle cx="116" cy="148" r="26" className="fill-teal-400" />
        <path d="M103 148l9 10 18-20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(520 120)">
        <rect width="46" height="100" rx="12" className="fill-white stroke-teal-500" strokeWidth="3" />
        <rect y="22" width="46" height="40" className="fill-teal-200" />
        <rect x="12" y="-14" width="22" height="16" rx="4" className="fill-teal-500" />
      </g>
      <g transform="translate(590 150)">
        <rect width="80" height="70" rx="8" className="fill-navy-500" />
        <path d="M0 22h80" className="stroke-navy-200" strokeWidth="3" />
        <rect x="30" y="34" width="20" height="8" rx="4" className="fill-teal-300" />
      </g>
    </g>);

}

function LicensingScene() {
  return (
    <g>
      <Ground />
      <path d="M330 40l90-30 90 30v80c0 52-38 84-90 104-52-20-90-52-90-104z" className="fill-navy-700" />
      <path d="M345 56l75-25 75 25v62c0 42-30 68-75 86-45-18-75-44-75-86z" className="fill-teal-400" />
      <path d="M385 118l28 28 52-58" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(150 80)">
        <rect width="150" height="110" rx="12" className="fill-white stroke-navy-300" strokeWidth="2" />
        <rect x="18" y="20" width="114" height="9" rx="4.5" className="fill-navy-200" />
        <rect x="18" y="42" width="80" height="8" rx="4" className="fill-navy-100" />
        <circle cx="112" cy="78" r="18" className="fill-teal-300" />
        <path d="M104 94l-6 22 14-8 14 8-6-22" className="fill-teal-500" />
      </g>
      <g transform="translate(560 90)">
        <rect width="120" height="100" rx="12" className="fill-white stroke-navy-300" strokeWidth="2" />
        <rect x="16" y="18" width="88" height="8" rx="4" className="fill-navy-200" />
        <path d="M24 56h72M24 72h50" className="stroke-navy-200" strokeWidth="6" strokeLinecap="round" />
      </g>
    </g>);

}

function FactoryScene() {
  const gear = (cx: number, cy: number, r: number, cls: string) =>
  <g transform={`translate(${cx} ${cy})`} className={cls}>
      <circle r={r} />
      {Array.from({ length: 8 }, (_, i) =>
    <rect key={i} x={-r * 0.18} y={-r - r * 0.28} width={r * 0.36} height={r * 0.42} rx="3" transform={`rotate(${i * 45})`} />
    )}
      <circle r={r * 0.4} className="fill-white" />
    </g>;

  return (
    <g>
      <Ground />
      <rect x="150" y="110" width="330" height="110" className="fill-navy-600" />
      <path d="M150 110l55-48v48M205 110l55-48v48M260 110l55-48v48" className="fill-navy-700" />
      <rect x="400" y="40" width="34" height="100" className="fill-navy-800" />
      <circle cx="420" cy="30" r="12" className="fill-white/80" />
      <circle cx="440" cy="12" r="9" className="fill-white/60" />
      {Array.from({ length: 4 }, (_, i) =>
      <rect key={i} x={176 + i * 70} y="146" width="40" height="34" rx="5" className="fill-teal-200" />
      )}
      <rect x="500" y="170" width="220" height="14" rx="7" className="fill-navy-300" />
      {[0, 1, 2].map((i) =>
      <rect key={i} x={520 + i * 66} y="140" width="46" height="30" rx="5" className="fill-teal-400" />
      )}
      {gear(580, 90, 34, "fill-navy-500")}
      {gear(640, 60, 22, "fill-teal-400")}
    </g>);

}

/* Contact page hero illustration: envelope + paper plane + location pin + call bubble */
export function ContactArt() {
  return (
    <svg viewBox="0 0 520 440" className="h-auto w-full max-w-md">
      <circle cx="260" cy="230" r="190" className="fill-teal-100/70" />
      <circle cx="260" cy="230" r="190" fill="none" strokeWidth="2" strokeDasharray="4 10" className="stroke-teal-300" />

      {/* envelope */}
      <g className={float}>
        <g transform="translate(120 160)">
          <rect width="260" height="170" rx="22" className="fill-white stroke-navy-200" strokeWidth="2" />
          <path d="M8 18l122 92L252 18" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="stroke-navy-300" />
          <rect x="20" y="118" width="70" height="8" rx="4" className="fill-navy-100" />
          <rect x="20" y="136" width="46" height="8" rx="4" className="fill-navy-100" />
          <circle cx="212" cy="128" r="26" className="fill-teal-400" />
          <path d="M200 128l9 10 17-19" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* paper plane */}
      <g className={float} style={{ animationDelay: "-2s" }}>
        <g transform="translate(330 60) rotate(-12 40 40)">
          <path d="M0 40L84 2 56 82 40 52z" className="fill-navy-600" />
          <path d="M40 52L84 2 30 44z" className="fill-navy-800" />
          <path d="M40 52l8 26 12-18z" className="fill-navy-400" />
        </g>
      </g>

      {/* location pin */}
      <g className={float} style={{ animationDelay: "-3.5s" }}>
        <g transform="translate(60 70)">
          <path d="M40 0C18 0 2 17 2 38c0 28 38 58 38 58s38-30 38-58C78 17 62 0 40 0z" className="fill-teal-400" />
          <circle cx="40" cy="38" r="15" fill="#fff" />
        </g>
      </g>

      {/* call bubble */}
      <g className={float} style={{ animationDelay: "-1s" }}>
        <g transform="translate(370 330)">
          <rect width="110" height="70" rx="22" className="fill-navy-700" />
          <path d="M26 70l-4 22 24-22z" className="fill-navy-700" />
          <path d="M44 22l8-4 7 14-6 4a22 22 0 0 0 11 11l4-6 14 7-4 8c-3 5-9 6-15 4-18-6-30-18-36-36-2-6 0-12 4-14z" className="fill-white" transform="scale(.8) translate(14 8)" />
        </g>
      </g>

      <g className="stroke-teal-400" strokeWidth="5" strokeLinecap="round">
        <path d="M60 330v26M47 343h26" />
        <path d="M468 190v22M457 201h22" />
      </g>
      <circle cx="250" cy="40" r="7" className="fill-teal-300" />
      <circle cx="470" cy="300" r="6" className="fill-navy-300" />
    </svg>);

}

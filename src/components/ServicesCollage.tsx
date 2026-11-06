import React from "react";

const shots = [
{ src: "./photos/company.jpg", n: "01", tall: true },
{ src: "./photos/registration.jpg", n: "02", tall: false },
{ src: "./photos/licensing.jpg", n: "03", tall: false },
{ src: "./photos/manufacturing.jpg", n: "04", tall: true }];


function Shot({ src, n, tall, tilt }: {src: string;n: string;tall: boolean;tilt: string;}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-[0_30px_60px_-25px_rgba(13,51,104,0.55)] ring-4 ring-white/85 ${tall ? "h-56" : "h-40"} ${tilt}`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 to-transparent" />
      <span
        className="absolute start-3 top-3 rounded-full bg-white/25 px-3 py-1 text-xs font-semibold ring-1 ring-white/50 backdrop-blur-md"
        style={{ color: "#ffffff" }}>
        {n}
      </span>
    </div>);

}

/* Hero idea for the Services page: a tilted photo collage, one photo per service */
export function ServicesCollage() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-4">
      <div className="space-y-4 pt-10">
        <Shot {...shots[0]} tilt="-rotate-2" />
        <Shot {...shots[2]} tilt="rotate-1" />
      </div>
      <div className="space-y-4">
        <Shot {...shots[1]} tilt="rotate-2" />
        <Shot {...shots[3]} tilt="-rotate-1" />
      </div>
    </div>);

}

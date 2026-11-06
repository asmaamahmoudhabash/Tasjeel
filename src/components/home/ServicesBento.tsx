import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "lucide-react";
import { Reveal } from "../Reveal";
import { services } from "../../data/services";

// Layout by position: row 1 = narrow + wide (featured), row 2 = wide + narrow
const spans = ["", "lg:col-span-2", "lg:col-span-2", ""];
const FEATURED_INDEX = 1;

// Cards that get a real photo as background (with a glass panel on top)
const PHOTOS: Record<string, string> = {
  "company-establishment": "./photos/company.jpg",
  "toll-manufacturing": "./photos/manufacturing.jpg"
};

const MAX_CHIPS = 6;

export function ServicesBento() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = s.icon;
        const featured = i === FEATURED_INDEX;
        const photo = PHOTOS[s.id];
        const dark = featured || !!photo;
        const wide = spans[i] !== "";
        return (
          <li key={s.id} className={spans[i]}>
            <Reveal delay={i * 0.06} className="h-full">
              <Link
                to={`/services#${s.id}`}
                className={`group relative isolate flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[2rem] p-8 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400 md:p-10 ${
                featured ?
                "mesh-bg gradient-border text-white hover:shadow-[0_40px_80px_-30px_rgba(20,150,138,0.6)]" :
                photo ?
                "gradient-border bg-navy-900 text-white hover:shadow-[0_40px_80px_-30px_rgba(13,51,104,0.7)]" :
                "gradient-border-light gradient-border-interactive bg-white text-navy-950 hover:shadow-[0_40px_80px_-40px_rgba(20,150,138,0.5)]"}`
                }>

                {photo &&
                <>
                    <img
                    src={photo}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

                    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/70 via-navy-950/15 to-navy-950/10" />
                  </>
                }
                {featured &&
                <div
                  aria-hidden="true"
                  className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-teal-400/30 opacity-70 blur-[90px] transition-opacity duration-300 group-hover:opacity-100" />

                }

                <div className={`flex items-start ${photo ? "justify-end" : "justify-between"}`}>
                  <span
                    className={`${photo ? "hidden" : "flex"} h-16 w-16 items-center justify-center rounded-2xl ${
                    photo ? "bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-md" :
                    featured ? "bg-white/10 text-teal-200 ring-1 ring-white/15" : "bg-teal-50 text-teal-600"}`
                    }>

                    <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-[transform,background-color,color] duration-200 group-hover:rotate-45 ${
                    photo ? "bg-white/20 text-white ring-1 ring-white/40 backdrop-blur-md group-hover:bg-teal-400 group-hover:text-navy-950" :
                    featured ?
                    "bg-white/10 text-white group-hover:bg-teal-400 group-hover:text-navy-950" :
                    "bg-navy-50 text-navy-700 group-hover:bg-navy-950 group-hover:text-white"}`
                    }
                    aria-hidden="true">

                    <ArrowUpRightIcon className="h-5 w-5" />
                  </span>
                </div>

                <div
                  className={
                  photo ?
                  "mt-auto rounded-3xl bg-white/15 p-5 ring-1 ring-white/35 backdrop-blur-md [-webkit-backdrop-filter:blur(14px)] md:p-6" :
                  "mt-auto pt-14"
                  }>

                  <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] md:text-3xl">{s.title}</h3>
                  <p className={`mt-3 max-w-lg leading-relaxed ${photo ? "text-white/90" : featured ? "text-white/70" : "text-navy-600"}`}>{s.summary}</p>
                  {wide &&
                  <ul className="mt-7 flex flex-wrap gap-2">
                      {s.items.slice(0, MAX_CHIPS).map((item) =>
                    <li
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      dark ? "bg-white/10 text-white/85 ring-1 ring-white/10" : "bg-navy-50 text-navy-700"}`
                      }>

                          {item}
                        </li>
                    )}
                      {s.items.length > MAX_CHIPS &&
                    <li className={`rounded-full px-3 py-1.5 text-xs font-semibold ${dark ? "text-teal-200" : "text-teal-600"}`}>
                          +{s.items.length - MAX_CHIPS} more
                        </li>
                    }
                    </ul>
                  }
                </div>
              </Link>
            </Reveal>
          </li>);

      })}
    </ul>);

}

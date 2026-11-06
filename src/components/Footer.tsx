import React from "react";
import { Link } from "react-router-dom";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Logo } from "./Logo";
import { contact } from "../data/company";
import { services } from "../data/services";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="text-center md:text-start lg:col-span-4">
          <div className="flex justify-center md:justify-start"><Logo inverted /></div>
          <p className="mx-auto mt-5 max-w-xs text-sm md:mx-0 leading-relaxed text-navy-300">
            Pharmaceutical and food regulatory affairs consultancy in Cairo, working with the EDA and NFSA.
          </p>
        </div>

        <div className="text-center md:text-start lg:col-span-2">
          <h2 className="text-base font-semibold text-white after:mx-auto after:mt-3 after:block after:h-0.5 md:after:mx-0 after:w-8 after:rounded-full after:bg-teal-400">Quick links</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-start lg:col-span-3">
          <h2 className="text-base font-semibold text-white after:mx-auto after:mt-3 after:block after:h-0.5 md:after:mx-0 after:w-8 after:rounded-full after:bg-teal-400">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) =>
            <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-white">{s.title}</Link>
              </li>
            )}
          </ul>
        </div>

        <div className="text-center md:text-start lg:col-span-3">
          <h2 className="text-base font-semibold text-white after:mx-auto after:mt-3 after:block after:h-0.5 md:after:mx-0 after:w-8 after:rounded-full after:bg-teal-400">Contact</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex justify-center gap-3 md:justify-start">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
            <li className="flex justify-center gap-3 md:justify-start">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white">{contact.email}</a>
            </li>
            <li className="flex justify-center gap-3 md:justify-start">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              <span className="flex flex-col items-center gap-1 md:items-start">
                {contact.phones.map((p) =>
                <a key={p.href} href={p.href} className="hover:text-white">{p.display}</a>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-center text-xs text-navy-400 sm:flex-row sm:justify-between sm:px-8 sm:text-start">
          <p>© {new Date().getFullYear()} Tasjeel Regulatory Office. All rights reserved.</p>
          <p>Nasr City, Cairo, Egypt</p>
        </div>
      </div>
    </footer>);

}
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon, MenuIcon, XIcon } from "lucide-react";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";

const links = [
{ to: "/", label: "Home" },
{ to: "/about", label: "About Us" },
{ to: "/services", label: "Services" },
{ to: "/products", label: "Products" },
{ to: "/contact", label: "Contact Us" }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${
      solid ? "border-navy-100 bg-white/90 shadow-sm backdrop-blur-xl" : "border-transparent bg-transparent"}`
      }>
      
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link to="/" aria-label="Tasjeel Regulatory Office, home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 rounded-full bg-navy-50 p-1 ring-1 ring-navy-100 lg:flex">
          {links.map((l) =>
          <li key={l.to}>
              <NavLink
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
              `block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              isActive ? "bg-navy-950 text-white" : "text-navy-600 hover:text-navy-950"}`

              }>
              
                {l.label}
              </NavLink>
            </li>
          )}
        </ul>

        <Link
          to="/contact"
          className="group hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors duration-150 hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 lg:inline-flex">
          
          Book a consultation
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-2">
          <LangToggle />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-navy-950 ring-1 ring-navy-200 hover:bg-navy-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-navy-100 bg-white lg:hidden">
          
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8">
              {links.map((l) =>
            <li key={l.to}>
                  <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                `block rounded-2xl px-4 py-3.5 font-display text-2xl font-semibold tracking-[-0.02em] ${
                isActive ? "bg-navy-50 text-navy-950" : "text-navy-600"}`

                }>
                
                    {l.label}
                  </NavLink>
                </li>
            )}
              <li className="mt-4">
                <Link
                to="/contact"
                className="block rounded-full bg-teal-400 px-5 py-3.5 text-center text-sm font-semibold text-navy-950">
                
                  Book a consultation
                </Link>
              </li>
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
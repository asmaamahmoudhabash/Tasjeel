import React from "react";
import { BriefcaseIcon, ClockIcon, LandmarkIcon, MailIcon, MapPinIcon, PackageIcon, PhoneIcon, PlusIcon, RocketIcon, ShieldCheckIcon } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Highlight } from "../components/Highlight";
import { GlowBackdrop } from "../components/GlowBackdrop";
import { ContactForm } from "../components/ContactForm";
import { ContactArt } from "../components/Art";
import { contact } from "../data/company";

const faqIconColors = [
"text-teal-600",
"text-navy-600",
"text-indigo-600",
"text-sky-600",
"text-teal-600",
"text-navy-600"];

const faqTones = [
"from-teal-400 to-sky-500",
"from-navy-500 to-navy-800",
"from-sky-400 to-indigo-500",
"from-teal-500 to-navy-500"];

const faqs = [
{ icon: BriefcaseIcon, q: "Which services do you provide?", a: "We support company establishment, product registration with the EDA and NFSA, licensing and regulatory procedures, and toll manufacturing coordination." },
{ icon: PackageIcon, q: "Which products can you register?", a: "Human pharmaceuticals, herbal products, biologics, cosmetics, medical devices, biocidal and veterinary products, food supplements and sports nutrition." },
{ icon: RocketIcon, q: "How do I get started?", a: "Send us a message or call us. We review your product and outline the pathway, documents and realistic timelines." },
{ icon: ClockIcon, q: "How long does registration take?", a: "It depends on the product category and the authority's requirements. We give you a realistic timeline after reviewing your product." },
{ icon: LandmarkIcon, q: "Do you work with both authorities?", a: "Yes. We prepare and follow up files with the Egyptian Drug Authority and the National Food Safety Authority." },
{ icon: ShieldCheckIcon, q: "Do you support us after approval?", a: "Yes. We support your launch and your post-marketing obligations." }];

export function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title={
        <>
            Let's talk about your next <Highlight dark>submission</Highlight>
          </>
        }
        intro="Call, email or send us a message. We'll reply within one business day with clear next steps."
        art={<ContactArt />}
        fullHeight={false} />
      

      {/* FAQ */}
      <section className="relative z-10 -mt-14 px-5 pb-4 sm:px-8 md:-mt-20">
        <div className="mx-auto max-w-7xl">
          <ul aria-label="Frequently asked questions" className="grid items-start gap-4 md:grid-cols-3">
            {faqs.map((f, i) =>
            <li key={f.q}>
                <Reveal delay={i * 0.05} className="h-full">
                  <details className="group rounded-3xl bg-gradient-to-br from-teal-300 to-teal-500 p-6 text-navy-950 shadow-[0_25px_60px_-30px_rgba(20,170,155,0.7)] ring-1 ring-teal-200 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_35px_70px_-30px_rgba(20,170,155,0.9)] open:ring-white">
                    <summary className="flex cursor-pointer list-none items-start gap-4 [&::-webkit-details-marker]:hidden">
                      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white/40 ${faqIconColors[i % faqIconColors.length]}`}>
                        <f.icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                      </span>
                      <span className="flex-1 pt-1 font-display text-base font-semibold leading-snug text-navy-950">{f.q}</span>
                      <PlusIcon className="mt-2 h-5 w-5 shrink-0 text-navy-800 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                    </summary>
                    <p className="mt-4 leading-relaxed text-navy-900">{f.a}</p>
                  </details>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-20 pt-12 sm:px-8 md:pb-28">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-40px_rgba(7,20,39,0.35)] ring-1 ring-navy-100 lg:grid-cols-[1fr_1.4fr]">
            <aside className="mesh-bg relative isolate overflow-hidden p-8 text-white sm:p-10 lg:p-12">
              <GlowBackdrop grid={false} />
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Contact information</h2>
              <p className="mt-3 text-white/60">Visit our office in Nasr City or reach us directly.</p>

              <ul className="mt-10 space-y-8">
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300 ring-1 ring-white/15">
                    <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-white/50">Address</p>
                    <p className="mt-1 leading-relaxed text-white">{contact.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300 ring-1 ring-white/15">
                    <MailIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white/50">Email</p>
                    <a href={`mailto:${contact.email}`} className="mt-1 block break-all text-white hover:text-teal-200">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300 ring-1 ring-white/15">
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm text-white/50">Phone</p>
                    {contact.phones.map((p) =>
                    <a key={p.href} href={p.href} className="mt-1 block text-lg font-medium text-white hover:text-teal-200">
                        {p.display}
                      </a>
                    )}
                  </div>
                </li>
              </ul>

              <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-white/15">
                <iframe
                  title="Map showing Tasjeel Regulatory Office in Nasr City, Cairo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" />
                
              </div>
            </aside>

            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>);

}
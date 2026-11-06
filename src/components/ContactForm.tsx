import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { services } from "../data/services";

type Fields = {name: string;company: string;email: string;phone: string;service: string;message: string;};
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", company: "", email: "", phone: "", service: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <div className="bg-white p-6 sm:p-10 lg:p-14">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ?
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center py-16 text-center"
          role="status">
          
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
              <CheckCircle2Icon className="h-7 w-7 text-teal-500" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-navy-900">Message sent</h3>
            <p className="mt-3 max-w-sm text-navy-600">
              Thank you, {fields.name.split(" ")[0]}. A member of our team will get back to you within one business day.
            </p>
            <button
            type="button"
            onClick={() => {
              setFields(empty);
              setStatus("idle");
            }}
            className="mt-8 text-sm font-semibold text-teal-600 hover:text-teal-700">
            
              Send another message
            </button>
          </motion.div> :

        <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy-950 md:text-4xl">Send us a message</h2>
            <p className="mt-2 text-sm text-navy-600">Fields marked * are required.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name *" error={errors.name}>
                <input id="name" value={fields.name} onChange={update("name")} autoComplete="name" className={inputCls(errors.name)} {...aria("name", errors.name)} />
              </Field>
              <Field id="company" label="Company" error={errors.company}>
                <input id="company" value={fields.company} onChange={update("company")} autoComplete="organization" className={inputCls()} />
              </Field>
              <Field id="email" label="Email *" error={errors.email}>
                <input id="email" type="email" value={fields.email} onChange={update("email")} autoComplete="email" className={inputCls(errors.email)} {...aria("email", errors.email)} />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone}>
                <input id="phone" type="tel" value={fields.phone} onChange={update("phone")} autoComplete="tel" className={inputCls()} />
              </Field>
              <Field id="service" label="Service of interest" className="sm:col-span-2">
                <select id="service" value={fields.service} onChange={update("service")} className={inputCls()}>
                  <option value="">Select a service</option>
                  {services.map((s) =>
                <option key={s.id} value={s.title}>{s.title}</option>
                )}
                  <option value="Other">Other</option>
                </select>
              </Field>
              <Field id="message" label="Message *" error={errors.message} className="sm:col-span-2">
                <textarea
                id="message"
                rows={5}
                value={fields.message}
                onChange={update("message")}
                placeholder="Tell us about your product or project"
                className={`${inputCls(errors.message)} h-auto resize-y py-3`}
                {...aria("message", errors.message)} />
              
              </Field>
            </div>

            <button
            type="submit"
            disabled={status === "loading"}
            className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-navy-900 px-8 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-800 disabled:opacity-70 sm:w-auto">
            
              {status === "loading" && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}

type FieldProps = {id: string;label: string;error?: string;className?: string;children: React.ReactNode;};

function Field({ id, label, error, className = "", children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy-800">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>);

}

function inputCls(error?: string) {
  return `h-12 w-full rounded-xl border bg-white px-4 text-sm text-navy-900 placeholder:text-navy-400 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4 ${
  error ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-navy-200 focus:border-teal-500 focus:ring-teal-100"}`;

}

function aria(id: string, error?: string) {
  return { "aria-invalid": !!error, "aria-describedby": error ? `${id}-error` : undefined };
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email.";else
  if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Please enter a valid email address.";
  if (!f.message.trim()) e.message = "Please add a short message.";
  return e;
}
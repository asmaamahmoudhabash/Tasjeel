import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon, CheckCircle2Icon, Loader2Icon } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ?
      <motion.div
        key="done"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="glass gradient-border flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-medium text-white"
        role="status">
        
          <CheckCircle2Icon className="h-5 w-5 text-teal-300" aria-hidden="true" />
          You're on the list — we'll email you at launch.
        </motion.div> :

      <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
          <div className="glass gradient-border flex flex-col gap-2 rounded-3xl p-2 sm:flex-row sm:rounded-full">
            <label htmlFor="notify-email" className="sr-only">Email address</label>
            <input
            id="notify-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="you@company.com"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "notify-error" : undefined}
            className="h-12 flex-1 rounded-full bg-transparent px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60" />
          
            <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-teal-400 px-6 text-sm font-semibold text-navy-950 transition-colors duration-150 hover:bg-teal-300 disabled:opacity-70">
            
              {status === "loading" ?
            <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> :

            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:rotate-45" aria-hidden="true" />
            }
              Notify me
            </button>
          </div>
          {status === "error" &&
        <p id="notify-error" className="mt-3 text-left text-sm text-red-300 sm:pl-6">
              Please enter a valid email address.
            </p>
        }
        </motion.form>
      }
    </AnimatePresence>);

}
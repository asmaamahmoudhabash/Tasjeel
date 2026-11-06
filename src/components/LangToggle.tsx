import React, { useSyncExternalStore } from "react";
import { getLang, setLang, subscribe } from "../i18n";

export function LangToggle() {
  const lang = useSyncExternalStore(subscribe, getLang);
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full px-4 text-sm font-semibold text-navy-950 ring-1 ring-navy-200 transition-colors duration-150 hover:bg-navy-50 lg:h-10">
      {lang === "ar" ? "English" : "العربية"}
    </button>);

}

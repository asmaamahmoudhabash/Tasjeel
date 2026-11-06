import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    if (!hash) return;
    const id = window.setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      const offset = window.innerWidth < 1024 ? 140 : 110;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
    }, 50);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);

  return null;
}
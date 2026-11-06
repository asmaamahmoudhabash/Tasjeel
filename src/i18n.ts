import { ar, rules, titles } from "./i18n-dict";

export type Lang = "en" | "ar";

let lang: Lang = "en";
const listeners = new Set<() => void>();
const textState = new WeakMap<Node, { en: string; ar: string }>();
const attrState = new WeakMap<Element, Record<string, { en: string; ar: string }>>();
const ATTRS = ["placeholder", "aria-label", "alt", "title"];
const ATTR_SELECTOR = ATTRS.map((a) => `[${a}]`).join(",");

export const getLang = () => lang;
export const subscribe = (fn: () => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

function translate(s: string): string | null {
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!m || !m[2]) return null;
  const key = m[2].replace(/\s+/g, " ");
  let out: string | undefined = ar[key];
  if (out === undefined) {
    for (const [re, rep] of rules) {
      if (re.test(key)) {
        out = key.replace(re, rep);
        break;
      }
    }
  }
  return out === undefined ? null : m[1] + out + m[3];
}

function doText(n: Text) {
  const v = n.nodeValue || "";
  const st = textState.get(n);
  if (st && v === st.ar) {
    if (lang === "en") {
      n.nodeValue = st.en;
      textState.delete(n);
    }
    return;
  }
  if (st) textState.delete(n); // React wrote a new English value
  if (lang !== "ar") return;
  const t = translate(v);
  if (t !== null && t !== v) {
    textState.set(n, { en: v, ar: t });
    n.nodeValue = t;
  }
}

function doAttrs(el: Element) {
  let st = attrState.get(el);
  for (const a of ATTRS) {
    const v = el.getAttribute(a);
    if (v === null) continue;
    const s = st && st[a];
    if (s && v === s.ar) {
      if (lang === "en") {
        el.setAttribute(a, s.en);
        delete st![a];
      }
      continue;
    }
    if (s) delete st![a];
    if (lang !== "ar") continue;
    const t = translate(v);
    if (t !== null && t !== v) {
      if (!st) {
        st = {};
        attrState.set(el, st);
      }
      st[a] = { en: v, ar: t };
      el.setAttribute(a, t);
    }
  }
}

function processSubtree(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    doText(root as Text);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (el.tagName === "SCRIPT" || el.tagName === "STYLE") return;
  doAttrs(el);
  el.querySelectorAll(ATTR_SELECTOR).forEach(doAttrs);
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      const p = n.parentElement;
      return p && (p.tagName === "SCRIPT" || p.tagName === "STYLE") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach(doText);
}

function applyLang() {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = titles[lang];
  processSubtree(document.body);
}

export function setLang(next: Lang) {
  lang = next;
  try {
    localStorage.setItem("lang", next);
  } catch (e) {
    /* storage may be blocked (file://) — language simply won't be remembered */
  }
  applyLang();
  listeners.forEach((fn) => fn());
}

export function initI18n() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") lang = saved;
  } catch (e) {
    /* ignore */
  }
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "ar" || q === "en") lang = q;
  const observer = new MutationObserver((records) => {
    for (const r of records) {
      if (r.type === "characterData") doText(r.target as Text);
      else if (r.type === "attributes") doAttrs(r.target as Element);
      else r.addedNodes.forEach(processSubtree);
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ATTRS,
  });
  applyLang();
}

import React from "react";

type HighlightProps = {children: React.ReactNode;dark?: boolean;};

export function Highlight({ children, dark = false }: HighlightProps) {
  return (
    <span className={`font-serif font-normal italic tracking-[-0.01em] ${dark ? "text-highlight" : "text-highlight-dark"}`}>
      {children}
    </span>);

}
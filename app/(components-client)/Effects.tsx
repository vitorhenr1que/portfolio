"use client";
import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let cleanup = () => {};

    (async () => {
      const mod = await import("scrollreveal");
      const scrollReveal = (mod as any).default ?? mod;
      const sr = scrollReveal({ distance: "24px", duration: 800, delay: 60, easing: "cubic-bezier(0.5,0,0,1)", cleanup: true, viewFactor: 0.12 });
      sr.reveal(".hero .eyebrow", { origin: "left" });
      sr.reveal(".hero h1", { origin: "bottom", delay: 100 });
      sr.reveal(".hero .subhead", { origin: "bottom", delay: 150 });
      sr.reveal(".hero .badges .badge", { origin: "bottom", interval: 80, delay: 200 });
      sr.reveal(".hero .actions .btn", { origin: "bottom", interval: 100, delay: 260 });
      sr.reveal(".hero-media", { origin: "right" });
      sr.reveal(".hero-card, .metrics .metric, .hero .card", { origin: "right", interval: 90, delay: 150 });
      sr.reveal(".section-title h2", { origin: "bottom" });
      sr.reveal(".section-title p", { origin: "bottom", delay: 80 });
      sr.reveal("#servicos .card", { origin: "bottom", interval: 80 });
      sr.reveal("#projetos h3", { origin: "left" });
      sr.reveal("#projetos .project, #projetos .card", { origin: "bottom", interval: 90 });
      sr.reveal("#depoimentos .quote", { origin: "bottom", interval: 100 });
      sr.reveal(".cta", { origin: "bottom" });
      sr.reveal("#sobre .card", { origin: "bottom", interval: 90 });
      sr.reveal("#contato .form", { origin: "left" });
      sr.reveal("#contato .card", { origin: "right" });
      sr.reveal("footer .footer-grid", { origin: "bottom" });
      cleanup = () => { try { sr.destroy(); } catch {} };
    })();

    return () => cleanup();
  }, []);

  return null;
}
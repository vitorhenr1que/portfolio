"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function InstagramEmbeds() {
  useEffect(() => {
    // @@ts-expect-error
    if ((window as any).instgrm?.Embeds) {
      // @@ts-expect-error
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return <Script async src="https://www.instagram.com/embed.js" strategy="afterInteractive" />;
}
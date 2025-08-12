"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function InstagramEmbeds() {
  useEffect(() => {
    // @ts-ignore
    if ((window as any).instgrm?.Embeds) {
      // @ts-ignore
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return <Script async src="https://www.instagram.com/embed.js" strategy="afterInteractive" />;
}
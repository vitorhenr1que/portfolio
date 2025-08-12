"use client";
import Script from "next/script";
import { useEffect } from "react";

// Declare só o que você usa do Instagram Embed
declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbeds() {
  // Reprocessa embeds se o script já estiver carregado
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <Script
      async
      src="https://www.instagram.com/embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        // Garante o process assim que o script terminar de carregar
        if (typeof window !== "undefined") {
          window.instgrm?.Embeds?.process();
        }
      }}
    />
  );
}
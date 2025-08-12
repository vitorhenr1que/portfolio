"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [isLight, setIsLight] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("vh-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const initialLight = saved === "light" || (!saved && prefersLight);
    if (initialLight) root.classList.add("light");
    setIsLight(root.classList.contains("light"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    root.classList.toggle("light");
    const light = root.classList.contains("light");
    localStorage.setItem("vh-theme", light ? "light" : "dark");
    setIsLight(light);
  }

  return { isLight, toggle };
}
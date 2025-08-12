"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [isLight, setIsLight] = useState<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("vh-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialLight = saved === "dark" || (!saved && prefersLight);
    if (initialLight) root.classList.add("dark");
    setIsLight(root.classList.contains("dark"));
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
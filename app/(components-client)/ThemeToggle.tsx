"use client";
import { useTheme } from "@/lib/useTheme";

export default function ThemeToggle() {
  const { isLight, toggle } = useTheme();
  return (
    <button aria-label="Alternar modo" className="btn btn-outline" onClick={toggle}>
      {isLight ? "☀️" : "🌙"}
    </button>
  );
}
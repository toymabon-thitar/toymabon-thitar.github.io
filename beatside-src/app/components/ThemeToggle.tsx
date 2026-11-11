
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-stone-300" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-white text-xl shadow-md transition hover:scale-105 dark:border-stone-700 dark:bg-[#292929] dark:text-white"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  setTheme: (next: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystem(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyThemeMetaFromCSSVar() {
  const bg = getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim();
  const meta = document.getElementById(
    "theme-color-runtime"
  ) as HTMLMetaElement | null;
  if (meta && bg) meta.content = bg;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, _setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved === "light" || saved === "dark" ? saved : getSystem();
    _setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);

    requestAnimationFrame(() => applyThemeMetaFromCSSVar());
  }, []);

  const setTheme = (next: Theme) => {
    const sys = getSystem();
    if (next === sys) localStorage.removeItem("theme");
    else localStorage.setItem("theme", next);

    _setTheme(next);
    document.documentElement.setAttribute("data-theme", next);

    requestAnimationFrame(() => applyThemeMetaFromCSSVar());
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}

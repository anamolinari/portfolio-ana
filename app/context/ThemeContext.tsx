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

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, _setTheme] = useState<Theme>("light");

  const applyThemeMeta = (t: Theme) => {
    const meta = document.querySelector(
      'meta[name="theme-color"]:not([media])'
    ) as HTMLMetaElement | null;

    if (meta) {
      meta.content = t === "dark" ? "#2c2826" : "#f0eae7";
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initial = saved === "light" || saved === "dark" ? saved : getSystem();

    _setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    applyThemeMeta(initial);
  }, []);

  const setTheme = (next: Theme) => {
    const sys = getSystem();

    if (next === sys) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }

    _setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    applyThemeMeta(next);
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

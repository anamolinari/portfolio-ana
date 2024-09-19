"use client";
import { useTheme } from "../context/ThemeContext";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="flex items-center justify-center text-xs leading-4 text-tertiary p-6">
      <p>© {currentYear} All rights reserved</p>
      <span>・</span>
      <p>Ana Molinari</p>
      <span>・</span>
      <button
        onClick={toggleTheme}
        aria-label="Switch between light and dark theme"
        className="sm:hover:text-primary sm:transition-colors sm:duration-300 sm:ease"
      >
        Switch theme
      </button>
    </footer>
  );
}

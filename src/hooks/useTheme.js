import { useState, useEffect } from "react";

const getPreferredTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function useTheme(initialTheme = null) {
  const [theme, setTheme] = useState(initialTheme || getPreferredTheme());

  // 每當 theme 改變時，更新 DOM 與 localStorage
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 切換主題函式
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

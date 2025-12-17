"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "arch";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        // Check for saved theme
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        // Remove all theme indicators first
        root.classList.remove("dark");
        root.removeAttribute("data-theme");

        // Apply new theme
        if (theme === "dark") {
            root.classList.add("dark");
        } else if (theme === "arch") {
            root.classList.add("dark"); // Arch is technically dark mode + overrides
            root.setAttribute("data-theme", "arch");
        }
        // "light" adds nothing

        localStorage.setItem("theme", theme);
    }, [theme]);

    // Listen for system changes if strictly system is desired, but manual override is simpler for this portfolio.

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

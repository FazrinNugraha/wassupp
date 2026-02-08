import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Read initial theme from DOM class that Astro already set
    // This prevents hydration mismatch - React must match what Astro rendered
    const [theme, setTheme] = useState<Theme>(() => {
        // Check if we're in browser environment
        if (typeof window !== 'undefined') {
            // First, check what class Astro already applied to <html>
            // This ensures React's initial state matches the server-rendered HTML
            const root = document.documentElement;
            if (root.classList.contains('light-theme')) {
                return 'light';
            }
            if (root.classList.contains('dark-theme')) {
                return 'dark';
            }
            // Fallback to localStorage if no class found
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (savedTheme === 'light' || savedTheme === 'dark') {
                return savedTheme;
            }
        }
        return 'dark'; // Default to dark if no saved preference
    });

    useEffect(() => {
        // Apply theme to document
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.add('light-theme');
            root.classList.remove('dark-theme');
        } else {
            root.classList.add('dark-theme');
            root.classList.remove('light-theme');
        }
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

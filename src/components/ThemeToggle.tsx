// src/components/ThemeToggle.tsx
import { useState, useEffect } from 'react';

function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    // Apply theme function
    const applyTheme = (dark: boolean) => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add('dark');
            // Dark theme variables
            root.style.setProperty('--color-background', "#1f242A");
            root.style.setProperty('--color-text', '#adb5bd');
            root.style.setProperty('--color-headings', '#74c0fc');
            root.style.setProperty('--color-links', '#91A7FF');
            root.style.setProperty('--color-border', '#ffffff');
            root.style.setProperty('--color-highlight', '#41C7C7');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            // Light theme variables
            root.style.setProperty('--color-background', '#adb5bd');
            root.style.setProperty('--color-text', '#1f242A');
            root.style.setProperty('--color-headings', '#1f242A');
            root.style.setProperty('--color-links', '#1f242A');
            root.style.setProperty('--color-border', '#1f242A');
            root.style.setProperty('--color-highlight', '#1f242A');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        // Check if user has a preference saved
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            applyTheme(false);
        } else {
            setIsDark(true);
            applyTheme(true);
        }
    }, []);

    const toggleTheme = () => {
        const newThemeIsDark = !isDark;
        setIsDark(newThemeIsDark);
        applyTheme(newThemeIsDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[--color-text]"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            )}
        </button>
    );
}

export default ThemeToggle;
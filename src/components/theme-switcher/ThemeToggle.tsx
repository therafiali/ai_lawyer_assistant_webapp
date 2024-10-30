"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, []);

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div
            className='flex items-center justify-center  cursor-pointer'
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <Sun color="yellow" size={28} /> : <Moon color="blue" size={28} />}
        </div>
    );
};

export default ThemeToggle;

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
            className='flex items-center justify-center  cursor-pointer duration-200 hover:scale-105 hover:text-sky_blue dark:hover:text-sky_blue'
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <Sun color="white" size={28} /> : <Moon color="black" size={28} />}
        </div>
    );
};

export default ThemeToggle;
44
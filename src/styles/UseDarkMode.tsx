import React, {useState} from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return [theme, toggleTheme];
}
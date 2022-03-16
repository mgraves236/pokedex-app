import React, {useState} from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return [theme, toggleTheme];
}
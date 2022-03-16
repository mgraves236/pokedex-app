import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

export default function ToggleTheme(props:any) {
    const theme = props.theme;
    const toggleTheme = props.toggleTheme;
    return (
        <div className="toggleTheme" onClick={toggleTheme}>
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> :
            <FontAwesomeIcon icon={faSun} />}

        </div>
    );
}
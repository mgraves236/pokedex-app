import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonList from "./component/PokemonList";
import Pagination from "./component/Pagination";
import LoadingWave from "./component/LoadingWave";
import useDarkMode from "./styles/UseDarkMode";
import ToggleTheme from "./component/ToggleTheme";
import {GlobalStyles, lightTheme, darkTheme} from "./styles/GlobalStyles";
import styled, {ThemeProvider} from 'styled-components';

function App() {
    const [pokemon, updatePokemon] = useState([]); // no initial state
    // state to track current page
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=6");
    const [nextUrl, setNextUrl] = useState("");
    const [previousUrl, setPreviousUrl] = useState("");
    // loading screen
    const [loading, setLoading] = useState(true); // by def site is loading
    const [theme, toggleTheme] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    console.log(theme);

    useEffect(() => { // added for efficiency
        setLoading(true);
        const controller = new AbortController();
        axios.get(currentUrl, {
            signal: controller.signal
        }).then(response => {
            setLoading(false);

            if (response.data.previous == null) {
                setPreviousUrl(currentUrl);
            } else {
                setPreviousUrl(response.data.previous);
            }
            if (response.data.next == null) {
                setNextUrl(currentUrl);
            } else {
                setNextUrl(response.data.next);
            }
            updatePokemon(response.data.results.map((p: any) => p.name));
        }).catch(error => {
            if (error.response) {
                // made a request, received wrong status code
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // request made no response
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        })

        // cancel older request after making a new request
        return () => controller.abort();
    }, [currentUrl]); // everytime arguments are changed in the array the effect is rerun -- empty array no rerun

    if (loading) {
        return (
                <LoadingWave/>
        )
    }

    // pagination
    function goToNextPage() {
        setCurrentUrl(nextUrl);
    }

    function goToPreviousPage() {
        setCurrentUrl(previousUrl);
    }

    return (
        <>
            <ThemeProvider theme = {themeMode}>
            <img id = "logo" src = "logo.svg"/>
            <GlobalStyles />
            <ToggleTheme
                theme = {theme}
                toggleTheme = {toggleTheme}
            />
            <Pagination
                goToNextPage = {goToNextPage}
                goToPreviousPage = {goToPreviousPage}
            />
            <PokemonList pokemon = {pokemon}/>
            </ThemeProvider>
        </>

    );
}

export default App;

import React, {useState, useEffect} from 'react';
import PokemonList from "./PokemonList";
import axios from 'axios';
import Pagination from "./Pagination";

function App() {
    const [pokemon, updatePokemon] = useState([]); // no initial state
    // state to track current page
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState("");
    const [previousUrl, setPreviousUrl] = useState("");
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const pageLimit = 5; // how many page numbers are displayed for the user
    let pagesNumber;
    // loading screen
    const [loading, setLoading] = useState(true); // by def site is loading
    useEffect(() => { // added for efficiency
        setLoading(true);
        const controller = new AbortController();
        axios.get(currentUrl, {
            signal: controller.signal
        }).then(response => {
            setLoading(false);
            // number of pages from the response
            pagesNumber = Math.round(response.data.left / pageLimit);

            if (response.data.previous == null) {
                setPreviousUrl(currentUrl);
            } else {
                setPreviousUrl(response.data.previous);
                setCurrentPageNumber((page) => page - 1);
            }
            if (response.data.next == null) {
                setNextUrl(currentUrl);
            } else {
                setNextUrl(response.data.next);
                setCurrentPageNumber((page) => page + 1);
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
        let text: string = "Loading...";
        return (
            <div>
                {text}
            </div>
        )
    }

    // pagination
    function goToNextPage() {
        setCurrentUrl(nextUrl);
    }

    function goToPreviousPage() {
        setCurrentUrl(previousUrl);
    }

    function changePage(event: any) {
        const pageNumber = Number(event.target.textContent); // convert to a number the item that the user clicked on
        setCurrentPageNumber(pageNumber);
        setCurrentUrl("https://pokeapi.co/api/v2/pokemon?offset=" + 20 * pageNumber + "&limit=20");
        console.log(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPageNumber - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
    };

    return (
        <>
            <PokemonList pokemon={pokemon}/>
            <Pagination
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                getPaginationGroup={getPaginationGroup}
                changePage={changePage}
                currentPageNumber={currentPageNumber}
                pagesNumber={pagesNumber}
            />
        </>
    );
}

export default App;

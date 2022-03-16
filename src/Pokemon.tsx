import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Pokemon(props: any) {
    let pokemonName = props.pokemon;
    const [loading, setLoading] = useState(true);
    const [pokemonStats, updatePokemonStats] = useState<any>();
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    useEffect(() => { // added for efficiency
        setLoading(true);
        const controller = new AbortController();
        axios.get(pokemonURL, {
            signal: controller.signal
        }).then(response => {
            updatePokemonStats(response.data);
            setLoading(false);
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
    }, [pokemonURL]);

    if (loading) {
        let text: string = "Loading...";
        return (
            <div className="pokemon-card">
                {text}
            </div>
        )
    }

    const style = pokemonStats.types[0].type.name + " pokemon-card";

    return (
        <>
            <div className={style}>
                <img src={pokemonStats.sprites.other.home.front_default}/>
                <h1>{pokemonName}</h1>
                <h3>{pokemonStats.types[0].type.name}</h3>
            </div>
        </>
    );
}
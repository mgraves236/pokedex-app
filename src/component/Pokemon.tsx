import React, {useEffect, useState} from 'react';
import Modal from './Modal';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons'

export default function Pokemon(props: any) {
    let pokemonName = props.pokemon;
    const [loading, setLoading] = useState(true);
    const [pokemonStats, updatePokemonStats] = useState<any>();
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const [isModalOpen, setModalOpen] = useState(false); // modal is closed initially

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
    const styleH = pokemonStats.types[0].type.name + "H";

    return (
        <>
            <div className={style}>
                <FontAwesomeIcon className={styleH} icon={faMagnifyingGlassPlus}
                onClick={() => {setModalOpen(true)}}/>
                <div className="card-body">
                <img src={pokemonStats.sprites.other.home.front_default}/>
                <h1>{pokemonName}</h1>
                <h3 className={styleH}>{pokemonStats.types[0].type.name}</h3>
                </div>
                {isModalOpen && <Modal
                pokemonStats = {pokemonStats}
                />}
            </div>
        </>
    );
}
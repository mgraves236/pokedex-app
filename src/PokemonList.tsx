import React from 'react';

export default function PokemonList (props:any) {
    let pokemon = props.pokemon;
    return (
        <div>
            {pokemon.map ((p:any) => ( // print a list of names for each pokemon p
                <div key = "{p}">{p}</div>
            ))}
        </div>
    );
}
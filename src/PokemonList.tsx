import React from 'react';
import Pokemon from "./Pokemon";

export default function PokemonList(props: any) {
    let pokemon = props.pokemon;
    return (
        <div className="pokemon-list">
            {pokemon.map((p: any) => ( // print each pokemon
                <Pokemon key={p}
                    pokemon={p}
                />
            ))}
        </div>
    );
}
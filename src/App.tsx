import React, { useState } from 'react';
import PokemonList from "./PokemonList";
import axios from 'axios';

function App() {
  const [pokemon, updatePokemon] = useState([]); // no initial state

  axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
    updatePokemon(response.data.results.map((p:any) => p.name));
  })
  return (
    <PokemonList pokemon={pokemon}/>
  );
}

export default App;

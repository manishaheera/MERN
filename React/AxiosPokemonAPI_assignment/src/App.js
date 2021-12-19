import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const[pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res=>{setPokemon(res.data)})
  });





  return (

    <div className="App">
      <h1> List of 807 Pokemon </h1>

      {
        pokemon.map((pokemon, index)=>{
          return(

            <div key={index} className="pokemonContainer">
              <p className="pokemon"> {index+1}: {pokemon.name}</p>
            </div>

          )
        })
      }

    </div>
  );
}

export default App;

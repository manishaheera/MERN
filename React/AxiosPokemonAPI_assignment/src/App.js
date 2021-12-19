import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')

      .then((res) => {
      setPokemonList(res.data.results);
      console.log(res.data.results);
      })

      .catch((err) => {
      console.log(err)
      })

    },[]);


  return (

    <div className="App">
      <h1> List of 807 Pokemon </h1>

      {
        pokemonList.map((pokemon, index)=>{
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

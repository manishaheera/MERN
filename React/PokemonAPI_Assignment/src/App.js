import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const[pokemon, setPokemon] = useState([]);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((res)=>{
        return res.json()
      })

      .then((res)=>{
        setPokemon(res.results)
      })

      .catch((err)=>{
        console.log(err)
      })
  });

  return (

    <div className="App">

      <h1> List of 807 Pokemon!</h1>

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

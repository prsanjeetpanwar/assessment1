// App.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonListAsync } from './features/PokemonSlice';
import SearchBar from './components/SearchBar';
import TypeDropdown from './components/TypeDropdown';
import PokemonList from './components/PokemonList';  

const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonListAsync(0, 110)); 
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4 ">
      <SearchBar />
      <div className='mb-[50px]'>
      <TypeDropdown />
      </div>
   
   
      <PokemonList pokemonData={pokemonList} />
     
    </div>
  );
};

export default App;

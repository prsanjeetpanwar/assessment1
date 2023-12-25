// SearchBar.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/PokemonSlice'; 

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.pokemon.searchQuery);

  const handleSearch = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search Pokemon..."
      value={searchQuery}
      onChange={handleSearch}
      className="border p-2
      shadow-lg
   

      rounded-md mb-4"
    />
  );
};

export default SearchBar;

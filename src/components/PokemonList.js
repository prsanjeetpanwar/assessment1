// PokemonList.js
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCart';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, fetchPokemonListAsync, setSelectedType, fetchPokemonDetailsAsync } from '../features/PokemonSlice';
import PokemonModal from './PokemonModal';

const PokemonList = ({ pokemonData }) => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.pokemon.searchQuery.toLowerCase());
  const selectedType = useSelector((state) => state.pokemon.selectedType);

  const filteredPokemon = pokemonData
    .filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery))
    .filter((pokemon) => !selectedType || (pokemon.types && pokemon.types.includes(selectedType)))
    .slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleCardClick = (pokemonName) => {
    dispatch(fetchPokemonDetailsAsync(pokemonName));
    console.log('Card clicked for:', pokemonName);
  };


  useEffect(() => {
    dispatch(fetchPokemonListAsync(0, 200)); // Adjust the limit as needed
  }, [dispatch, selectedType]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 pt-[8vw]">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.sprites}
            types={pokemon.types}
            onClick={() => handleCardClick(pokemon.name)}
          />
        ))}
      </div>
      <PokemonModal />
      <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex justify-between w-full max-w-screen-lg mx-auto">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="bg-white text-black px-4 py-2 rounded sm:px-6"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= pokemonData.length}
          className="bg-white text-black px-9 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;

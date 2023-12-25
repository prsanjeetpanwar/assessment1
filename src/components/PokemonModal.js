
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPokemon } from '../features/PokemonSlice';
import AbilitiesCard from './AbilitiesCard';

const PokemonModal = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);

  const handleCloseModal = () => {
    dispatch(setSelectedPokemon(null));
  };

  const handleModalClick = (e) => {
  
    if (e.target.classList.contains('modal-background')) {
      handleCloseModal();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center modal-background ${selectedPokemon ? 'block' : 'hidden'}`}
      onClick={handleModalClick}
    >
      {selectedPokemon && (
        <div className="border rounded p-4 bg-white flex">
    
          <div className="mr-4 pt-8">
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} className="w-64 h-64" />
          </div>

         
          <div>
            <AbilitiesCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonModal;

// TypeDropdown.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedType } from '../features/PokemonSlice'; // Update the path

const TypeDropdown = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector((state) => state.pokemon.selectedType);

  const handleTypeChange = (e) => {
    dispatch(setSelectedType(e.target.value));
  };

  return (
    <div className="flex items-start justify-end">
      <select
        className="p-3 border
        
        w-[160px]
        shadow-lg
      
        rounded mt-[-60px]" 
        style={{ marginLeft: 'auto', marginBottom: '0' }} 
        value={selectedType}
        onChange={handleTypeChange}
      >
       
        <option value="" className=''>All Types</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="bug">Bug</option>
       
      </select>
    </div>
  );
};

export default TypeDropdown;

import React from 'react';

const typeGradients = {
  fire: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  water: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  grass: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
  bug: 'linear-gradient(45deg, #AEEA00 30%, #EEFF41 90%)',
  flying: 'linear-gradient(45deg, #1E90FF 30%, #87CEEB 90%)',
  rock: 'linear-gradient(45deg, #FFD700 30%, #FFEB3B 90%)',
  poison: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
  ground: 'linear-gradient(45deg, #8B4513 30%, #CD853F 90%)',
  normal: 'linear-gradient(45deg, #FF69B4 30%, #FF1493 90%)',
 
};

const defaultGradient = 'linear-gradient(45deg, #8B4513 30%, #CD853F 90%)'; 

const PokemonCard = ({ id, name, imageUrl, types, onClick }) => {
  const gradient =
    types && types.length > 0
      ? typeGradients[types[0].toLowerCase()] || defaultGradient
      : defaultGradient;

  const cardStyle = {
    backgroundImage: gradient,
  };

  return (
    <div className="border-[1px] rounded-lg shadow-white mb-11 pt-1 overflow-hidden" style={cardStyle} onClick={onClick}>
      <div className="flex items-center text-white p-6">
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold mb-1">ID: #{id}</p>
          <p className="text-2xl font-bold mb-2">{name}</p>
          {Array.isArray(types) && types.length > 0 ? (
            <p className="text-lg">Type: {types.join(', ')}</p>
          ) : (
            <p className="text-sm">No types available</p>
          )}
        </div>
        <img className="rounded-md ml-4 w-48 h-48 object-cover" src={imageUrl.front_default} alt={`${name} sprite`} />
      </div>
    </div>
  );
};

export default PokemonCard;

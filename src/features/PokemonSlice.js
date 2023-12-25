// src/features/pokemonSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  selectedType: '',
  pokemonList: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setSearchQuery, setSelectedType, setPokemonList, setSelectedPokemon } = pokemonSlice.actions;

const extractTypes = (pokemon) => pokemon.types.map((type) => type.type.name);

export const fetchPokemonListAsync = (offset, limit) => async (dispatch, getState) => {
  try {
    const state = getState();
    const selectedType = state.pokemon.selectedType;

    let apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${600}`;


    if (selectedType) {
      apiUrl += `&type=${selectedType}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    const detailedData = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailedResponse = await fetch(pokemon.url);
        const detailedData = await detailedResponse.json();
        return {
          ...detailedData,
          types: extractTypes(detailedData),
        };
      })
    );

    dispatch(setPokemonList(detailedData));
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
};

export const fetchPokemonDetailsAsync = (pokemonName) => async (dispatch) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    if (data.stats) {
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        baseStat: stat.base_stat,
      }));

      dispatch(
        setSelectedPokemon({
          name: data.name,
          id: data.id,
          types: data.types,
          sprites: data.sprites,
          stats: stats,
        })
      );
    } else {
      console.error(`Stats not found for ${pokemonName}`);
    }
  } catch (error) {
    console.error(`Error fetching details for ${pokemonName}:`, error);
  }
};

export default pokemonSlice.reducer;

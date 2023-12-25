// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './features/PokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export default store;

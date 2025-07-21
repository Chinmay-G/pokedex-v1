import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemonsInfo: [],
  isLoading: false,
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
    setPokemonsInfo(state, action) {
      state.pokemonsInfo = action.payload;
      state.isLoading = false;
    },
    loading(state) {
      state.isLoading = true;
    },
    addToPokemonsInfo(state, action) {
      state.pokemonsInfo.push(action.payload);
      state.isLoading = false;
    },
  },
});

export const { setPokemons, setPokemonsInfo, loading, addToPokemonsInfo } =
  resultsSlice.actions;

export default resultsSlice.reducer;

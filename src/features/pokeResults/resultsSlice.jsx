import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = resultsSlice.actions;

export default resultsSlice.reducer;

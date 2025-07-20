import { configureStore } from "@reduxjs/toolkit";
import resultsReducer from './features/pokeResults/resultsSlice';

const store = configureStore({
    reducer: {
        results: resultsReducer,
    }
});

export default store;
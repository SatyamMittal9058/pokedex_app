import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        page: 0,
    },
    reducers: {
        addPokemons: (state, action) => {
            state.data = [...state.data, action.payload];
            state.page += 1;
        },
        
    }
})
export const { addPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
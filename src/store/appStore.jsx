import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

const appStore=configureStore({
    reducer:{
        pokemon:pokemonReducer,
    }

})
export default appStore;
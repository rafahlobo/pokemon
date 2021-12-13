import React from "react";
export const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
    searchField: "",
    pokemonSelected: null,
    modal: false,
};
export default React.createContext(null);
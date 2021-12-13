import { useState } from "react"
import DataContext, { initialState } from "./dataContext"
import { fetchPokemon } from "./gateway"

let gotPokemons = false;
const Store = _ => {
    const [state, _setstate] = useState(initialState)
    const updateState = (key, newValue) => _setstate({ ...state, [key]: newValue })
    const updateStateAsObj = (obj) => _setstate({ ...state, ...obj })

    const persistPokemons = pokemons => updateState("pokemons", pokemons)
    if (!gotPokemons) {
        fetchPokemon(persistPokemons)
        gotPokemons = true
    }

    return (
        <DataContext.Provider value={{ state, updateState, updateStateAsObj }}>
            {_.children}
        </DataContext.Provider>
    )
}

export default Store
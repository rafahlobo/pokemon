import { sortPokemonByName } from '../utils'
import pokemonClient from "../services/pokemonClient"
export const fetchPokemon = reducer => {
    pokemonClient.getPokemons(0, 9999).then(
        pokemons => reducer(sortPokemonByName(pokemons))
    )
}
export const getPokemonDetails = (pokemonId, reducer) => {
    pokemonClient.getPokemonDetails(pokemonId).then(
        pokemonDetails => reducer(pokemonDetails)
    )
}
import axios from "axios"
import { createPokemon } from "../model/pokemonModel"


class PokemonClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://pokeapi.co/api/v2',
            timeout: 1000,
        })
    }
    async getPokemons(offset, limit) {
        try {
            const request = await this.httpClient.get(`/pokemon?offset=${offset || 0}&limit=${limit || 50}`)
            return request.data.results.map(p => ({
                name: p.name,
                id: parseInt(p.url.split("/")[6])
            }))
        } catch (e) {
            console.error(e)
        }
    }
    async getPokemonDetails(pokemonId) {
        try {
            const request = await this.httpClient.get(`/pokemon/${pokemonId}`)
            return createPokemon(request.data)
        } catch (e) {
            console.error(e)
        }
    }
}
export default new PokemonClient()
import { sortPokemonByName, filterPokemonByPhrase } from "../utils"

const pokemonMaker = name => ({ name })

const pokemonMocked = [
    pokemonMaker("carlossauro"),
    pokemonMaker("brunassauro"),
    pokemonMaker("aptossauro"),
]

test('should to sort pokémon by alphabetic order', () => {

    const sorted = sortPokemonByName(pokemonMocked)
    expect(sorted[0]).toMatchObject(pokemonMaker("aptossauro"))
    expect(sorted[1]).toMatchObject(pokemonMaker("brunassauro"))
    expect(sorted[2]).toMatchObject(pokemonMaker("carlossauro"))
});


describe("filter pokemons", _ => {

    test('1# - Full Match.', () => {
        const filtered = filterPokemonByPhrase(pokemonMocked, "sauro")
        expect(filtered.length).toBe(3)
    });
    test('2# - Single Match', () => {
        const filtered = filterPokemonByPhrase(pokemonMocked, "carl")
        expect(filtered.length).toBe(1)
    });
    test('3# - No match case.', () => {
        const filtered = filterPokemonByPhrase(pokemonMocked, "xpto")
        expect(filtered.length).toBe(0)
    });
    test('4# - Null value as parameter.', () => {
        const filtered = filterPokemonByPhrase(pokemonMocked, null)
        expect(filtered.length).toBe(3)
    });
})

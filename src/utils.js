export const sortPokemonByName = pokemonList => {
    return pokemonList.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    })
}

export const filterPokemonByPhrase = (pokemonList, phrase) => {
    if (!phrase) return pokemonList
    return pokemonList.filter(p => {
        const name = p.name.toUpperCase()
        return name.includes(phrase.toUpperCase())
    })
}
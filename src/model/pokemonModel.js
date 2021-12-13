export const createPokemon = raw => {

    const payload = {
        name: raw.name,
        experience: raw?.base_experience || "Desconhecido",
        especie: raw?.species?.name,
        forms: raw?.forms?.map(f => f.name).join(", "),
        height: raw?.height,
        image: raw?.sprites?.other["official-artwork"]?.front_default,
        abilities: raw?.abilities?.map(a => a.ability.name).join(", "),
        type: raw?.types?.map(a => a.type.name).join(", "),
    }
    return payload
}
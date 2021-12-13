import { Table, Button, Icon } from 'semantic-ui-react'
import { useContext } from "react"
import DataContext from "../data/dataContext"
import { getPokemonDetails } from '../data/gateway'
import { filterPokemonByPhrase } from '../utils'
import React from "react"

import "../styles/components/pokemonTable.scss"




const PokemonTable = _ => {
    const { state, updateStateAsObj } = useContext(DataContext)
    const { pokemons, searchField } = state
    const openModal = pokemonId => {
        getPokemonDetails(pokemonId,
            details => {
                console.log(pokemonId, details)
                updateStateAsObj({
                    modal: true,
                    pokemonSelected: details
                })
            })

    }
    console.log("render table...")
    const pokemonFiltered = filterPokemonByPhrase(pokemons, searchField)
    const linesWithData = pokemonFiltered.map(pokemon => {
        return (
            <Table.Row key={pokemon.id}>
                <Table.Cell collapsing colSpan="2">
                    <span className="pokemonName">{pokemon.name}</span>
                </Table.Cell>
                <Table.Cell collapsing>
                    <Button
                        color='blue'
                        onClick={_ => openModal(pokemon.id)}>
                        <Icon name="chevron right" /> Ver detalhes
                    </Button>
                </Table.Cell>
            </Table.Row>
        )
    })
    const lines = linesWithData.length ?
        linesWithData :
        <Table.Row>
            <Table.Cell textAlign='center'>Sem Pokémons para capturar. :/</Table.Cell>
        </Table.Row>



    return (
        <div className="pokemonTable">
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>Lista de Pokémons</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{lines}</Table.Body>
            </Table>
        </div>
    )
}

export default React.memo(PokemonTable)
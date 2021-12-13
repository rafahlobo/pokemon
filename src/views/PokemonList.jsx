import SearchBar from '../components/SearchBar'
import PokemonTable from '../components/PokemonTable'
import Container from '../components/Container'
import ModalDetails from "../components/ModalDetails"
import "../styles/views/pokemonList.scss"

const PokemonList = _ => {
    return (
        <>
            <ModalDetails />
            <SearchBar />
            <div className='pokemonLista'>
                <Container >
                    <PokemonTable />
                </Container>
            </div>

        </>

    )


}

export default PokemonList;
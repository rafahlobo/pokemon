import "../styles/components/searchBar.scss"
import { Input, Icon } from 'semantic-ui-react'
import DataContext from "../data/dataContext"
import { useContext } from "react"
const SearchBar = _ => {
    const { state, updateState } = useContext(DataContext)
    return (
        <div className="searchBar">
            <Input
                value={state.searchField}
                onChange={e => updateState("searchField", e.target.value)}
                icon={<Icon name='search' inverted circular link />}
                className="searchInput" placeholder='Digite o nome de um pokemon...' />
        </div>
    )
}

export default SearchBar
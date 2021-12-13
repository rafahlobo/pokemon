import PokemonList from "./PokemonList"
import Store from "../data/Store"
const Content = _ => (
    <Store>

        <main className="Content">
            <PokemonList />
        </main>
    </Store>
);

export default Content;
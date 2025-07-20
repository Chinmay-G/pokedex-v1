import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function PokemonsContainer() {
  const pokemons = useSelector((state) => state.results.pokemons);
  return (
    <div className="flex flex-wrap gap-3 gap-y-5 justify-around bg-red-100 h-[90%] rounded-2xl p-3 overflow-auto">
      {pokemons.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} />
      ))}
    </div>
  );
}

export default PokemonsContainer;

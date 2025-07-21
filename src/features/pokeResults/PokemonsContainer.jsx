import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function PokemonsContainer() {
  const pokemons = useSelector((state) => state.results.pokemons);
  return (
    <div className="flex flex-wrap gap-3 gap-y-5 justify-around  bg-red-100 rounded-sm p-3 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-red-300 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-track]:bg-red-200 [&::-webkit-scrollbar-track]:rounded border-6 border-red-100">
      {/* <ul className="overflow-auto"> */}
      {pokemons.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} />
      ))}
      {/* </ul> */}
    </div>
  );
}

export default PokemonsContainer;

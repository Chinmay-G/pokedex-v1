import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";

function PokemonsContainer() {
  const results = useSelector((state) => state.results);
  const { pokemons, isLoading } = results;

  return (
    <div className="flex flex-wrap justify-around gap-3 gap-y-5 overflow-auto rounded-xl border-6 border-red-100 bg-radial from-rose-100 to-red-100 px-2 py-4 sm:p-3 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-red-300 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-red-200">
      <h3>{pokemons?.map((e) => e.name)}</h3>
      {isLoading && <p>LOADING SEARCH DATA...</p>}
      {pokemons?.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.name} />
      ))}
    </div>
  );
}

export default PokemonsContainer;

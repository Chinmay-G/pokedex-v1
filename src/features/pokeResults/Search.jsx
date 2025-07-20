import { useEffect, useState } from "react";
import { fetchAllPokeNames } from "../../services/apiPokemon";
import { setPokemons } from "./resultsSlice";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const allPokeNames = useLoaderData();

  //   Filter the pokemon with search query (name or id) and set the pokemons results state
  useEffect(() => {
    // if (query.length <= 3 && !(typeof Number(query) === "number")) return;
    if (query.length <= 3) return;

    if (!allPokeNames?.length) return;

    const filteredPokemons = allPokeNames.filter(
      (poke, i) =>
        JSON.stringify(i).includes(query) ||
        poke.name.toLowerCase().includes(query)
    );

    dispatch(setPokemons(filteredPokemons));
  }, [query, allPokeNames]);

  return (
    <div>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search by Pokemon Name / ID"
        onChange={(e) => setQuery(e.target.value)}
        className="bg-red-50 my-3 mx-auto w-full py-1 px-2 text-sm text-yellow-900 focus:outline-none rounded-full sm:py-3 sm:px-6 sm:text-base sm:my-6"
      />
    </div>
  );
}

export default Search;

export async function loader() {
  return await fetchAllPokeNames();
}

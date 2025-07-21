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
    if ((query.length < 3 && isNaN(query)) || !query.length) return;
    // if (query.length < 3) return;

    if (!allPokeNames?.length) return;

    const filteredPokemons = allPokeNames.filter(
      (poke, i) =>
        i === Number(query) - 1 ||
        (isNaN(query) && poke.name.toLowerCase().includes(query)),
    );

    dispatch(setPokemons(filteredPokemons));
  }, [query, allPokeNames, dispatch]);

  return (
    <div>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search by Pokemon Name / ID"
        onChange={(e) => setQuery(e.target.value)}
        className="mx-auto my-3 w-full rounded-full bg-red-50 px-2 py-1 text-sm text-yellow-900 focus:outline-none sm:my-6 sm:px-6 sm:py-3 sm:text-base"
      />
    </div>
  );
}

export default Search;

export async function loader() {
  return await fetchAllPokeNames();
}

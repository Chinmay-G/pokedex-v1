import { useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

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
    if ((query.length < 3 && isNaN(query)) || !query.length) {
      dispatch(setPokemons([]));
      return;
    }
    // if (query.length < 3) return;

    if (!allPokeNames?.length) return;

    const filteredPokemons = allPokeNames.filter(
      (poke, i) =>
        (isNaN(query) &&
          poke.name.toLowerCase().includes(query.toLowerCase())) ||
        i === Number(query) - 1,
    );

    dispatch(setPokemons(filteredPokemons));
  }, [query, allPokeNames, dispatch]);

  return (
    <div className="relative">
      <span className="text-red-500">
        <SearchIcon className="absolute top-5 left-3 m-auto rounded-4xl bg-red-200 p-1 sm:top-9 sm:left-3 sm:text-2xl" />
      </span>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search by Pokemon Name / ID"
        onChange={(e) => setQuery(e.target.value)}
        className="text-md mx-auto my-3 w-[50vw] rounded-full bg-red-50 px-4 py-2 pl-10 text-stone-900 transition-all focus:w-[70vw] focus:shadow-[0_4px_5px_black] focus:outline-none sm:my-6 sm:px-6 sm:py-3 sm:pl-12 sm:text-base"
      />
    </div>
  );
}

export default Search;

export async function loader() {
  return await fetchAllPokeNames();
}

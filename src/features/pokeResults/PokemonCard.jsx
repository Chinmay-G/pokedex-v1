import { useEffect, useState } from "react";
import { fetchPokemonInfo } from "../../services/apiPokemon";

function PokemonCard({ pokemon }) {
  const [pokeData, setpokeData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // console.log(pokemon);

  useEffect(() => {
    const controller = new AbortController();

    async function getImageAndId() {
      setIsLoading(true);
      try {
        const data = await fetchPokemonInfo(pokemon.url, controller);
        setpokeData({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        });
      } catch (err) {
        if (!err.name === "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getImageAndId();

    // Cleanup function when component is useEffect is executed again
    return function () {
      controller.abort();
    };
  }, [pokemon]);

  if (isLoading) return "LOADING...";

  return (
    <div className="flex min-h-20 w-35 flex-col items-center justify-center rounded-3xl bg-radial from-[whitesmoke] to-[#fff1f1] p-1 text-center transition-all hover:translate-[-0.5rem] hover:cursor-pointer hover:from-rose-300 hover:to-red-500 hover:shadow-[0.5rem_0.5rem_6px_black]">
      {error && <p>error</p>}

      {isLoading && !error && <p>LOADING..</p>}

      {!isLoading && !error && (
        <>
          <img src={pokeData.image} alt="" />
          <p>#{pokeData.id}</p>
          <p className="font-semibold uppercase">{pokeData.name}</p>
        </>
      )}
    </div>
  );
}

export default PokemonCard;

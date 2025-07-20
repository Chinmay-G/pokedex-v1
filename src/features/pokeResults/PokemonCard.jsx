import { useEffect, useRef } from "react";

function PokemonCard({ pokemon }) {
  let pokeDataRef = useRef();

  useEffect(() => {
    async function getImageAndId() {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      console.log(data);
      pokeDataRef.current = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      };
    }
    getImageAndId();
  }, [pokemon]);

  if (!pokeDataRef?.current) return "LOADING...";

  return (
    <div className="min-w-20 min-h-20 border">
      <img src={pokeDataRef.current.image} alt={pokeDataRef.current.name} />
      <p>{pokeDataRef.current.id}</p>
      <h4 className="capitalize">{pokeDataRef.current.name}</h4>
    </div>
  );
}

export default PokemonCard;

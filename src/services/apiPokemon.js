// const LIST_URL = 'https://ex.traction.one/pokedex/pokemon';
const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1302';


export async function fetchAllPokeNames() {
    const res = await fetch(LIST_URL);
    const data = await res.json();
    console.log(data.results);
    return data.results;
}

export async function fetchPokemonCard(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
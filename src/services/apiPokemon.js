// const LIST_URL = 'https://ex.traction.one/pokedex/pokemon';
const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1302';

export async function fetchAllPokeNames() {
    const res = await fetch(LIST_URL);
    const data = await res.json();
    console.log(data.results);
    return data.results;
}

export async function fetchPokemonInfo(url, controller) {
    const res = await fetch(url, { signal: controller.signal });
    const data = await res.json();
    console.log(data);
    return data;
}

// export async function fetchPokemonsInfo(pokemons, controller) {
//     // return await pokemons.map(async function pokemon(poke) {
//     //     return await fetchPokemonInfo(poke.url, controller);
//     // });
//     console.log(pokemons)
//     for (let i = 0; i < pokemons.length; i++) {
//         fetchPokemonInfo(pokemons[i].url, controller);
//         // const res = await fetch(url, { signal: controller.signal });
//         // const data = await res.json();
//         // pokemonsInfo.push(poke);
//     }
//     // console.log(pokemonsInfo)
//     return pokemonsInfo;
// }


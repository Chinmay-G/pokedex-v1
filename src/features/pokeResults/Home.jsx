import PokemonsContainer from "./PokemonsContainer";
import Search from "./Search";

function Home() {
  return (
    <div className="h-[80vh] grid grid-rows-[auto_1fr] p-2">
      <Search />
      <PokemonsContainer />
    </div>
  );
}

export default Home;

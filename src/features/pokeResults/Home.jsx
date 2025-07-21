import PokemonsContainer from "./PokemonsContainer";
import Search from "./Search";

function Home() {
  return (
    <div className="grid h-[85vh] grid-rows-[auto_1fr] p-2 sm:h-[90vh]">
      <Search />
      <PokemonsContainer />
    </div>
  );
}

export default Home;

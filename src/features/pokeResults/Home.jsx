import PokemonsContainer from "./PokemonsContainer";
import Search from "./Search";

function Home() {
  return (
    <div className="grid h-[80vh] grid-rows-[auto_1fr] justify-items-center gap-2 p-2 sm:h-[90vh]">
      <Search />
      <PokemonsContainer />
    </div>
  );
}

export default Home;

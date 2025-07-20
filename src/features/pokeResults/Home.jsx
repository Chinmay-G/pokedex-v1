import PokemonsContainer from "./PokemonsContainer";
import Search from "./Search";

function Home() {
  return (
    <div className="h-[90%] p-2">
      <Search />
      <PokemonsContainer />
    </div>
  );
}

export default Home;

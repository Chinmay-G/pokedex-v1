import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/pokeResults/Home";
import { loader as resultsLoader } from "./features/pokeResults/Search";
import PokemonInfo from "./features/pokeInfo/PokemonInfo";
import PageNotFound from "./ui/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Pokedex layout
    errorElement: <PageNotFound />,

    children: [
      {
        path: "/",
        element: <Home />, // Search and Results
        loader: resultsLoader,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonInfo />, // Basic Info, Stats, Evolution Chain
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

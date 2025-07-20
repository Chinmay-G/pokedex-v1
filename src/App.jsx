import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./features/pokeResults/Home";
import PokemonInfo from "./features/pokeInfo/PokemonInfo";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // Pokedex layout

    children: [
      {
        path: "/",
        element: <Home />, // Search and Results
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

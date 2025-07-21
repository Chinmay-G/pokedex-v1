import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center justify-center gap-3 rounded bg-radial from-red-400 to-red-700 sm:flex sm:justify-center sm:gap-5">
        <img
          src="/logo.png"
          alt="Pokedex"
          className="w-18 p-1 sm:w-42 sm:p-3"
        />
        <span className="text-4xl font-bold text-red-100 sm:text-[80px]">
          POKEDEX
        </span>
        {/* <img src="/heading.png" alt="Pokemon" className="w-45" /> */}
      </div>
    </Link>
  );
}

export default Logo;

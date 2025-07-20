import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center justify-around sm:flex sm:justify-center gap-3 bg-red-400 sm:gap-5">
        <img
          src="/logo.png"
          alt="Pokedex"
          className="w-18 shadow-2xs bg-red-400 p-1 sm:w-42 sm:p-3"
        />
        <span className="font-bold text-4xl sm:text-[80px] text-red-100">
          POKEDEX
        </span>
        {/* <img src="/heading.png" alt="Pokemon" className="w-45" /> */}
      </div>
    </Link>
  );
}

export default Logo;

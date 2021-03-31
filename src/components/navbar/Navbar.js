import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-1 py-5 md:p-5 bg-gray-900 flex flex-col justify-center md:flex-row text-white sticky z-50">
      <Link className="text-center mx-2 md:mx-5 text-lg" to="/">
        Home
      </Link>
      <Link className="text-center mx-2 md:mx-5 text-lg" to="/counter">
        Counter
      </Link>
      <Link className="text-center mx-2 md:mx-5 text-lg" to="/quotes">
        Quotes
      </Link>
      <Link className="text-center mx-2 md:mx-5 text-lg" to="/todos">
        Todos
      </Link>
      <Link className="text-center mx-2 md:mx-5 text-lg" to="/caculator">
        Caculator
      </Link>

      <Link className="text-center mx-2 md:mx-5 text-lg" to="/test">
        Test
      </Link>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="px-1 py-2 bg-gray-900 flex flex-col md:flex-row text-white sticky z-30">
      <div className="flex items-center">
        <Link className="ml-2" to="/">
          VMO training
        </Link>
        <span className="ml-auto mr-2 md:hidden">
          <i onClick={() => setIsShow(true)} className="fas fa-bars"></i>
        </span>
      </div>

      <div
        className={`p-4 bg-gray-900 flex flex-col md:justify-center md:flex-1 md:flex-row transition duration-700 overflow-hidden absolute w-full left-0 top-0 transform md:relative ${
          isShow
            ? "translate-y-0 md:translate-y-0"
            : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div className="text-right absolute right-0">
          <i
            onClick={() => setIsShow(false)}
            className="fas fa-times md:hidden mr-4"
          ></i>
        </div>
        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/counter"
        >
          Counter
        </Link>
        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/quotes"
        >
          Quotes
        </Link>
        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/todos"
        >
          Todos
        </Link>
        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/caculator"
        >
          Caculator
        </Link>

        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/random-users"
        >
          Random Users
        </Link>

        <Link
          onClick={() => setIsShow(false)}
          className="md:ml-2 md:mx-5 md:text-lg"
          to="/test"
        >
          Test Animation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

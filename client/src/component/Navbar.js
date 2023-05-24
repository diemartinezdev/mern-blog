import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-slate-100 rounded-xl justify-between text-center top-0 font-bold w-full text-lg">
      <h2 className="ml-10 cursor-pointer text-2xl">TBB</h2>
      <ul>
        <li className="inline-block py-4">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/articles-list" className="pl-6 pr-8">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="home">
          <Link to="/">Juanma Pauso</Link>
        </li>
        <li>
          <Link to="/CV">CV</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

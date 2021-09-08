import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li >
          <Link to="/">Juanma Pauso</Link>
        </li>
        <li>
          <ul>
            <li className="enlace">
              <Link to="/CV">CV</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

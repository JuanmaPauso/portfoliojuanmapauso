import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li >
          <NavLink to="/">Juanma Pauso</NavLink>
        </li>
        <li>
          <ul>
            <li className="enlace" >
              <NavLink activeClassName="color-activo" to="/CV">Sobre mí</NavLink>
            </li>
            <li >
              <NavLink activeClassName="color-activo" to="/Portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

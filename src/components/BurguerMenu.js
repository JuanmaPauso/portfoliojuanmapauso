import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (

        <Menu noOverlay onStateChange={toggleMenu}>
          <Link className="menu-item" exact to="/">
            Home
          </Link>
          <Link className="menu-item" to="/CV">
            Sobre mi
          </Link>
          <Link className="menu-item" to="/Portfolio">
            Portfolio
          </Link>
        </Menu>

  );
};

export default BurgerMenu;

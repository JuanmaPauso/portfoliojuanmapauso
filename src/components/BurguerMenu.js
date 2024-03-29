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
    <div>
        <Link exact to="/" >
          <svg className="logoHome" viewBox="0 0 642 700">
            <title>Logo home</title>
              <g>
                <path d="M575.698 127.533L386.14 18.216C345.794-5 295.981-5 255.635 18.216L66.302 127.533C25.956 150.749.937 194.025.937 240.683v218.635c0 46.657 24.793 89.707 65.365 113.149L255.86 681.784c40.346 23.216 90.159 23.216 130.505 0l189.559-109.317c40.346-23.216 65.365-66.492 65.365-113.149V240.683c-.226-46.658-25.019-89.934-65.591-113.15zm-22.765 387.458l-119.911 60.406-36.063 23.441-32.007 1.127-105.711-3.155-49.812-.451-17.356-11.27-30.429-1.578-14.2-14.651-25.469-17.355-7.213-22.314-26.371-23.893 8.565-17.806-.451-6.987-22.765-35.838 12.622-29.978-51.39-139.746 49.361-11.721 6.086-8.565 14.651-81.819 45.755-27.949 34.486-28.851 23.441.902 16.905-9.692 24.343-.451 18.708-5.635 27.724 1.127 18.257 5.184 30.879-9.241 60.857 16.679 43.277 27.949 28.85 3.156 9.242 10.819 88.13-16.003-43.276 82.946 2.704 7.438 56.575 21.187-35.613 42.6 8.115 50.714-26.823 36.515-2.028 25.92-5.184 6.086 69.647 9.241-47.108 91.512z" />
                <path d="M421.752 324.079l-3.606-5.634-7.663 2.93-21.864-18.032-45.305 14.876-14.651 1.353-10.819-.902-21.412-7.664-18.032 1.353-22.765 13.974s-15.778-3.606-16.229-5.184c-.45-1.578-16.679-2.028-16.679-2.028l-15.552 3.606-17.581 4.733-.902 13.975-.451 22.089 14.651 9.467 10.368 5.184 13.524 13.298 11.27 5.635 20.286 2.93 36.289 19.159h6.761l33.359-25.019 15.778-1.578 9.917 2.705 18.258.225 10.142 6.537 15.553-15.778 27.724-2.479-8.565-21.864-1.804-37.867z" />
              </g>
            </svg>
        </Link>
        <Menu right noOverlay onStateChange={toggleMenu} width={'100%'} customBurgerIcon={ <img src={`${process.env.PUBLIC_URL}/images/menu.svg`}/>} customCrossIcon = { <img src={`${process.env.PUBLIC_URL}/images/cross.svg`}/> }>
          <Link className="menu-item" exact to="/">
            Home
          </Link>
          <Link className="menu-item" to="/CV">
            Sobre mi
          </Link>
          <Link className="menu-item" to="/Portfolio">
            Portfolio
          </Link>
          {/*  <Link className="menu-item" to="/blog">
            Blog
          </Link> */}
         
        </Menu>
    </div>

  );
};

export default BurgerMenu;

import React from "react";
import "../css/header.css";
import Logo from "../assets/robinhood.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header__wrapper">
      {/* logo */}

      <div className="header__logo">
        <Link to="/">
          <img src={Logo} width={25} />
        </Link>
      </div>
      {/* search bar */}
      {/* use the search to pass the ticker to  */}
      <div className="header__search">
        <input name={"search"} placeholder={"Search"} type={"text"} />
      </div>
      {/* menu items
       */}

      <div className="header__menu">
        <div className="header__menu__item">
          <Link to="/free-stocks">
            <h4>Free Stocks</h4>
          </Link>
        </div>
        <div className="header__menu__item">
          <Link exact to="/">
            <h4>Portfolio</h4>
          </Link>
        </div>
        <div className="header__menu__item">
          <Link to="/cash">
            <h4>Cash</h4>
          </Link>
        </div>
        <div className="header__menu__item">
          <Link to="/messages">
            <h4>Messages</h4>
          </Link>
        </div>
        <div className="header__menu__item">
          <Link to="/account">
            <h4>Account</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

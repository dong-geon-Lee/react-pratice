import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <div className="nav__itemLineOne">Hello Guest</div>
          <div className="nav__itemLineTwo">Sign In</div>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineOne">Your</div>
          <div className="nav__itemLineTwo">Shop</div>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <ShoppingBasketIcon className="itemBask" />
            <div className="nav__itemLineTwo nav__basketCount">0</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

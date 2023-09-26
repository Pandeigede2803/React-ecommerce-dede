import React from "react";
import logo from "../assets/cek-toko-sebelah.png";
import {
  FaBars,
  FaShoppingCart,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import "./navbar.css";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser, userState, logout, login, register } = useUserContext();

  const toggleSidebar = () => {
    openSidebar();
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={toggleSidebar}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Nav;

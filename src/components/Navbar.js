import React from "react";
import logo from "../assets/cek-toko-sebelah.png";
import { FaBars, FaShoppingCart,FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
import "./navbar.css";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo}></img>
          </a>
          <button type="button" className="nav-toggle">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
        <div className="cart-btn-wrapper">
          <a className="cart-btn" href="/cart">
            Cart
            <span className="cart-container">
              <FaShoppingCart />
              <span className="cart-value">0</span>
            </span>
          </a>
          <button type="button" className="auth-btn">
            Login <span><FaUserPlus className=""/></span>
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;

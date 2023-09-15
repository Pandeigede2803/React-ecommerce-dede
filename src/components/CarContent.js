import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import "./carcontent.scss";
const CartItems = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
        
      ))}
      <div className=" flex justify-center space-x-5">
        <Link to="/products" className="py-2 px-4  bg-slate-500 w-auto h-auto text-white rounded-md text-center hover:bg-primary-dark transition duration-300">
          Continue Shopping
        </Link>
        <button className="py-2 px-4  bg-slate-500 w-auto h-auto text-white rounded-md text-center hover:bg-primary-dark transition duration-300" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartItems;

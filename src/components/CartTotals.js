import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <div className=" bg-transparent border border-neutral-600 p-4 rounded-lg flex flex-col w-1/4 mr-7 ml-auto">
      <h5 className="text-lg font-semibold mb-2">
        Subtotal:{" "}
        <span className="text-primary">{formatPrice(total_amount)}</span>
      </h5>
      <p className="mb-1">
        Shipping Fee:{" "}
        <span className="text-primary">{formatPrice(shipping_fee)}</span>
      </p>
      <hr className="my-2 border-t border-gray-300" />
      <h4 className="text-xl font-semibold">
        Order Total:{" "}
        <span className="text-primary">
          {formatPrice(total_amount + shipping_fee)}
        </span>
      </h4>
      {myUser ? (
        <Link
          to="/checkout"
          className="block mt-4 py-2 px-4  bg-slate-500 w-auto h-auto z-10 text-white rounded-md text-center hover:bg-primary-dark transition duration-300"
        >
          Proceed to Checkout
        </Link>
      ) : (
        <button
          onClick={loginWithRedirect}
          className="block mt-4 py-2 px-4  bg-slate-500 w-auto h-auto text-white rounded-md text-center hover:bg-primary-dark transition duration-300"
        >
          Login to Checkout
        </button>
      )}
    </div>
    
  );
};

export default CartTotals;

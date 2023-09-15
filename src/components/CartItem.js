import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount, stock }) => {
  console.log("Price:", price);
  console.log("Amount:", amount);
  price = parseFloat(price);
  amount = parseInt(amount);
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc"); // Dispatch the 'inc' action
  };

  const decrease = () => {
    toggleAmount(id, "dec"); // Dispatch the 'dec' action
  };

  const handleRemove = () => {
    removeItem(id);
  };

//   return (
//     <article className="cart-item bg-transparent rounded-lg p-4 flex items-center justify-between space-x-4">
//       <div className="flex items-center space-x-4">
//         <img src={image} alt={name} className="w-1/4 rounded-lg" />
//         <div className="text-sm">
//           <h4 className="text-gray-900 font-semibold">{name}</h4>
//           <p className="text-gray-500 flex items-center space-x-2">
//             Color:
//             <span
//               className={`w-4 h-4 rounded-full inline-block`}
//               style={{ backgroundColor: color }}
//             ></span>
//           </p>
//           <p className="text-primary font-semibold">{formatPrice(price)}</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-4">
//         <AmountButtons
//           amount={amount}
//           increase={increase}
//           decrease={decrease}
//         />
//         <p className="text-primary font-semibold">
//           {formatPrice(price * amount)}
//         </p>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="text-red-500 hover:text-red-600 focus:outline-none"
//           onClick={handleRemove}
//         >
//           <FaTrash />
//         </button>
//       </div>
//     </article>
//   );
// };

// export default CartItem;

return (
  <div className="flex justify-center my-4">
  <article className="grid grid-cols-8 w-4/5">
    <div className="col-span-2 ">
      <img src={image} alt={name} className="w-3/5 rounded-lg mx-auto" />
    </div>
    <div className="col-span-1 flex flex-col justify-center">
      <h4 className="text-gray-900 font-semibold text-center">{name}</h4>
      <p className="text-gray-500 text-center space-x-2">
        Color:
        <span
          className={`w-4 h-4 rounded-full inline-block  items-center mx-3`}
          style={{ backgroundColor: color }}
        ></span>
      </p>
    </div>
    <p className="col-span-1 text-primary font-semibold text-center my-auto ">
      {formatPrice(price)}
    </p>
    <div className="col-span-2 my-auto mx-auto">
      <AmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
    </div>

    <div className=" col-span-2 flex flex-row my-auto mx-auto">
    <div className=" items-center mx-2 ">
      <p className="text-primary font-semibold">
        {formatPrice(price * amount)}
      </p>
    </div>
    <div className="my-auto items-center mx-3">
      <button
        type="button"
        className="text-red-500 hover:text-red-600 focus:outline-none"
        onClick={handleRemove}
      >
        <FaTrash />
      </button>
    </div>
    </div>
  </article>
</div>
);
};

export default CartItem;

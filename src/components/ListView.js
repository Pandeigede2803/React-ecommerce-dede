import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import "./listview.css";
import Product from "./Product";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const ListView = ({ products }) => {
  return (
    <div className="">
      {products.map((product) => (
        <div
          key={product.id}
          className="container-fluid border-b border-gray-300 p-4 flex items-center space-x-4"
        >
          <div className="">
            <img
              src={product.image}
              alt={product.name}
              className=" object-cover rounded-lg w-96 h-auto"
            />
          </div>
          <div className="p-8 space-y-6 text-xl">
            <h4>Topi Baseball</h4>
            <h5 className="price">{formatPrice(product.price)}</h5>
            <p className=" mb-10">
              {product.description}
            </p>
            <Link
              to={`/products/${product.id}`}
              className="inline-block bg-zinc-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
    //coba DYNAMIS TAPI CSS BERANTAKAN
    // <div className="">
    //   {products.map((product) => (
    //     <div key={product.id} className="container-fluid border-b border-gray-300 p-4 flex items-center space-x-4">
    //       <Product
    //         image={product.image}
    //         name={product.name}
    //         price={product.price}
    //         id={product.id}
    //         className="flex flex-row"
    //       />
    //       <Link
    //         to={`/products/${product.id}`} // Adjust the link route accordingly
    //         className="inline-block bg-zinc-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg mt-4"
    //       >
    //         Details
    //       </Link>
    //     </div>
    //   ))}
    // </div>

    
    
  );
};

export default ListView;

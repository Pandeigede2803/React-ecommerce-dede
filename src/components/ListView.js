import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import "./listview.css";
import Product from "./Product";


const ListView = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ))};
    </div>
  )
};

export default ListView;

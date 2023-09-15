import React from "react";
import Product from "./Product";
import "./gridview.css";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const GridView = ({ products }) => {
  return (
    <section>
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ))}
    </div></section>
  );
};

export default GridView;

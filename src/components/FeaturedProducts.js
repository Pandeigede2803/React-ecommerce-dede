import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import "./featured.css";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  console.log(`feature yang dirender adalah ${featured}`);

  //use loading component, while fetch data
  if (loading) {
    return <Loading />;
  }

  //use error component, if error thrown
  if (error) {
    return <Error />;
  }

  //return featured products
  return (
    <div className="">
      <section className="section-featured">
        <h2 className="title">Produk Pilihan</h2>
        <div className="underline"></div>

        <div className="featured">
          {featured.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
        <Link to="/products" className="btn">
          Semua Produk
        </Link>
      </section>
    </div>
  );
};

export default FeaturedProducts;

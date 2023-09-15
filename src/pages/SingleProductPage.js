import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <>
      <PageHero title={name} product />
      <div className=" bg-transparent py-8">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="bg-neutral-600 hover:bg-neutral-700 text-white rounded-md px-4 py-3 text-center text-sm font-semibold inline-block cursor-pointer uppercase transition duration-200 ease-in-out"
          >
            Back to Products
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-xl">
            <ProductImages images={images} />
            <section className="content space-y-5">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5 className=" text-orange-500 font-bold">{formatPrice(price)}</h5>
              <p className="line-clamp-5">{description}</p>
              <p className="text-gray-700 text-xl">
                <span className="font-semibold">Available: </span>
                {stock > 0 ? "In stock" : "Out of stock"}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">SKU: </span>
                {sku}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Brand: </span>
                {company}
              </p>
              <hr className="my-4" />
              {stock > 0 && <AddToCart product={product} />}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

// const Wrapper = styled.main`
//   .btn {
//     margin-left: auto;
//   }
//   .product-center {
//     display: grid;
//     gap: 4rem;
//     margin-top: 2rem;
//   }
//   .price {
//     color: var(--clr-primary-5);
//   }
//   .desc {
//     line-height: 2;
//     max-width: 45em;
//   }
//   .info {
//     text-transform: capitalize;
//     width: 300px;
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     span {
//       font-weight: 700;
//     }
//   }

//   @media (min-width: 992px) {
//     .product-center {
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//     }
//     .price {
//       font-size: 1.25rem;
//     }
//   }
// `;

export default SingleProductPage;

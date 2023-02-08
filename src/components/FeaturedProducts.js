import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import styles from "./featured.css";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()


  //use loading component, while fetch data

  //use error component, if error thrown

  //return featured products
  return (
    <div>
    </div>
  )
}


export default FeaturedProducts

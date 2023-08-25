import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import { useState,useEffect } from 'react'
import Loading from './Loading'


const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data (replace this with your actual data fetching logic)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is fetched
    }, 2000); // Simulated 2-second loading time
  }, []);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Products not found.
      </h5>
    )
  }


  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products} />
}

export default ProductList

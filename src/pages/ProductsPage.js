import React from 'react'
import { Filters, ProductList, Sort, PageHero } from '../components'
import './productspage.css'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title='products' />
      <div className='page-product'>
        <div className='products'>
          <Filters />
          <div className='product-list'>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}


export default ProductsPage

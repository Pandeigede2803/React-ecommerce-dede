import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let tempProducts = []
    if (sort === 'price-lowest') {
      tempProducts = filtered_products.sort((a, b) => {
        if (a.price < b.price) {
           return -1
        }
        if (a.price > b.price) {
           return 1
        }
        return 0
      })
    }
    if (sort === 'price-highest') {
      tempProducts = filtered_products.sort((a, b) => {
        if (a.price > b.price) {
           return -1
        }
        if (a.price < b.price) {
           return 1
        }
        return 0
      })
      /**
       * TODO
       */
    }
    if (sort === 'name-a') {
      tempProducts = filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
      /**
       * TODO
       */
    }

    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, category, company, color, price, shipping } = state.filters
    let tempProducts = [...all_products]
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      )
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      )


      /**
       * TODO
       */
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        console.log(`Product color: ${product.colors}, Filter color: ${color}`)
        // Add your color filtering logic here
        // For example, if 'color' is a property in each product:
        // return product.colors === color;
        return product.colors.includes(color);
      });
    }
    if (price !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        // Add your price filtering logic here
        // For example, if you want to filter products with price less than or equal to a specific value:
        return product.price <= parseFloat(price); // Assuming 'price' is a string, convert it to a number
      });
    }
    
    // filter by shipping
if (shipping) {
  tempProducts = tempProducts.filter((product) => {
    // Add your shipping filtering logic here
    // For example, if 'shipping' is a property in each product:
    return product.shipping === true;
  });
}
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer

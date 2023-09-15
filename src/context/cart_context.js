import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

// Fungsi untuk mendapatkan data keranjang dari penyimpanan lokal
const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

// Nilai awal state untuk konteks keranjang
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

// Membuat konteks CartContext
const CartContext = React.createContext()

// Provider untuk konteks keranjang
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Fungsi untuk menambahkan produk ke keranjang
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  }

  // Fungsi untuk mengubah jumlah item dalam keranjang
  const toggleAmount = (id, value) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    })
  }

  // Fungsi untuk mengosongkan keranjang
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  // Efek samping untuk menyimpan data keranjang ke penyimpanan lokal dan menghitung total
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart])
  
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Fungsi untuk menggunakan konteks keranjang
export const useCartContext = () => {
  return useContext(CartContext)
}

import React from 'react'
import { FaShoppingCart, FaUserMinus,FaSignOutAlt, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'


const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser,userState,login, logout } = useUserContext()
  return (
    <div className="cart-btn-wrapper">
    <Link to="/cart" className="cart-btn">
      Cart
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">{total_items}</span>
      </span>
    </Link>

    {userState.userId ? (
      <button type="button" className="auth-btn" onClick={logout}>
        <Link to="/login">Logout</Link> <span><FaSignOutAlt /></span>
      </button>
    ) : (
      <button type="button" className="auth-btn" onClick={login}>
        <Link to="/login">Login</Link><span><FaUserPlus /></span>
      </button>
    )}
  </div>
  )
}


export default CartButton

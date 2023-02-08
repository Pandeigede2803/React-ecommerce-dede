import React from 'react'
import logo from '../assets/cek-toko-sebelah.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import './navbar.css'


const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <div className='nav'>
      
    </div>
  )
}


export default Nav

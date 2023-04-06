import React, { useEffect, useState } from 'react'
import ProductsCartInfo from './ProductsCartInfo'
import axios from 'axios'

const Cart = () => {
 const [cartProducts, setcartProducts] = useState()
 const getAllProductsCart = () => {
  const config = {
    headers:{
     Authorization:`Bearer ${localStorage.getItem('token')}`
    }
   }
   const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
   axios.get(url, config)
    .then(res => setcartProducts(res.data))
    .catch(err => console.log(err))
 }
 useEffect(() => {
  getAllProductsCart()
 }, [])
 console.log(cartProducts);
  return (
    <div>
      <h2>Cart</h2>
      {
        cartProducts?.map(product => (
          <ProductsCartInfo />
        ))
      }
      
    </div>
  )
}

export default Cart

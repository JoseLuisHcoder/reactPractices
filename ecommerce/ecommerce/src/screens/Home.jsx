import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slice/products.slice'
import CardHome from '../components/home/CardHome'
import axios from 'axios'

const Home = () => {
  
  const products = useSelector(state => state.productsSliceStore)
    const dispatch = useDispatch()
    
  
    useEffect(() => {
      dispatch(getAllProducts())
    },[])
    // console.log(products);
  return (
  <div>
  {
    products?.map(product => (
      <CardHome 
      key={product.id}
      product={product}
      />
    ))
  }
  </div>
  )
}

export default Home
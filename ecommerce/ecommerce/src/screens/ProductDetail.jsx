import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState()
  const {id} = useParams()

//   useEffect(() => {
//     const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
//     axios.get(url)
//       .then(res => setProductInfo(res.data))
//       .catch(err => console.log(err))
//   }, [])
// console.log(productInfo);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail
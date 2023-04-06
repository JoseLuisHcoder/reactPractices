import React from 'react'

const ProductsCartInfo = () => {
  return (
    <article >
    <header >
        <h4 >{product.brand}</h4>
        <h3 >{product.title}</h3>
    </header>
          <i onClick={handleDelete} ></i>
    
    <span >{product.productsInCart.quantity}</span>
    <div>
        <span >Total: </span>
        <p >{product.price}</p>
    </div>
</article>
  )
}

export default ProductsCartInfo

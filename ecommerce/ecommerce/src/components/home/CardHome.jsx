import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardHome = ({product}) => {
 const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }
  return (
    <article onClick={handleClick} >
    <header className='card__home__header'>
        <img className='card__home__img__back' src={product.images[1].url} alt="" />
        
        {/* <img className='card__home__img' src={product.productImgs[0]} alt="" /> */}
    </header>
    <div className='card__home__body'>
        <h2 className='card__home__title'>{product.title}</h2>
        <section className='card__home__price__container'>
            <h3 className='card__home__price__label'>Price</h3>
            <span className='card__home__price__number'>$ {product.price}</span>
        </section>
        <button ><i className='bx bx-cart-add'></i></button>
    </div>
</article>
  )
}

export default CardHome

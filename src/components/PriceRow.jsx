import React from 'react'
import './PriceRow.css'

const addToCartImage = '../../public/shopping_cart.png' ;

const PriceRow = ({className,HandleAddItemToCart}) => {
  return (
    <div className={'price_row ' + className}>
        <p className='price_text'>{(Math.random() * 200).toFixed(2) + ' Lei'}</p>
        <div className='cart_image_container' onClick={HandleAddItemToCart}>
          <img className='cart_image' src = {addToCartImage}/>
        </div>
    </div>
  )
}

export default PriceRow
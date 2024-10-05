import React from 'react';
import "./CheckoutProduct.css";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
  const[{basket},dispatch] =useStateValue();

  const removeFromBasket=() => {
    //remove item from basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id, 
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt=''/>
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>

        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>


        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))
          }
        </div>

        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
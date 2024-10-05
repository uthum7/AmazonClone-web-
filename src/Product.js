import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useStateValue } from './StateProvider';




function Product({ id, title, image, price, rating }) {

const [{basket},dispatch] =useStateValue();
 const addToBasket =() => {
  //add item to basket
  dispatch({
    type:'ADD_TO_BASKET',
    item:{
      id:id,
      title:title,
      image: image,
      price:price,
      rating:rating
    }
  })
 };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
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
      </div>

      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;

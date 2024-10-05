import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket}] =useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
      <img className='checkout__ad'  src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' alt=''/>
      {basket?.length === 0 ?(
        <div>
          <h2>Your Basket Is Empty</h2>
          <p>You have  no items in  your basket.To buy one more items,Click "Add To Basket" Next to the item.</p>
        </div>
      ):(
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {/* list out all of the checkout items */}
    
           {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.image}
            rating={item.rating}
            />
           ))}
        </div>
      )}
      </div>
      {basket.length> 0 &&(
        <div className='checkout__reight'>
          <h1>SubTotal</h1>
          <Subtotal/>
         </div> 
      )}
    </div>
  )
}

export default Checkout
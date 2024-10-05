import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  // Extract the basket from the state
  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
        {/*price */}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type='checkbox' /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)} // Calculate total price from basket items
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />
        <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

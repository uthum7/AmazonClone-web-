import React, { useState } from 'react';
import Product from "./Product";
import './Home.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Home() {
  

  return (
    <div className='home'>
    
      
          <img className='home__image' src={ "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"} alt="Description of the image" />
     <div className='home__row'>

      <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />

     <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />


      </div>

      <div className='home__row'>
      <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />

      <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />

      <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />
      </div>

      <div className='home__row'>
      <Product
      id="12321341"
      title="The learn Startup:How constant inovation create"
      price={11.96}
      rating={5}
      image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg"
      />
      </div>
    </div>
    
   

  
  );
}

export default Home;

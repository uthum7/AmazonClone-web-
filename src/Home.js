import React from 'react';
import './Home.css';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


function Home() {
  return (
    <section>
      <div className='home__slider'>
    <div className='image__list'>
       <div className='image__item'>
        <img src="https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg"/>
       </div>
       <div className='image__item'>
        <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"/>
       </div>
       <div className='image__item'>
        <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"/>
       </div>
       <div className='image__item'>
        <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"/>
       </div>
       <div className='image__item'>
        <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"/>
       </div>
    </div>

    <div className='image__sliderBotton'>
        <botton><FaAngleLeft /></botton>
        <botton><FaAngleRight /></botton>

    </div>
  </div>
  </section>
    
  )
}

export default Home
import React from 'react';
import './Header.css'; // Ensure this CSS file exists
import { Link } from 'react-router-dom';
import {  MdSearch  } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";






function Header() {
  return (
    <nav className='header'>
      {/* Logo on the left */}
      <Link to="/">
        <img 
          className='header__logo' 
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
          alt="amazon_logo" 
        />
      </Link>

      {/* Search bar */}
        <div className="header__search">
          <input type='text' className="header__searchInput" />
          <MdSearch className='header__searchIcon' />

        </div>
      
     

      {/* 3 Links on the right */}
      <div className='header__nav'>
        {/*first link */}
        <Link to="/login" className='header__link'>
         <div className='header__option'>
           <span className='header__optionLineOne'>Hello Quzi</span>
           <span className='header__optionLineTwo'>Sign In</span>
         </div>
        </Link>

        {/*secound link */}
        <Link to="/login" className='header__link'>
         <div className='header__option'>
           <span className='header__optionLineOne'>Return</span>
           <span className='header__optionLineTwo'>& Orders</span>
         </div>
        </Link>
        {/*third link */}
        <Link to="/login" className='header__link'>
         <div className='header__option'>
           <span className='header__optionLineOne'>Your</span>
           <span className='header__optionLineTwo'>Prime</span>
         </div>
        </Link>

        <Link to="/checkout" className='header__link'>
           {/*shoping basket icon*/}
           <div className='header__optinBasket'>
           <MdShoppingBasket className='header__optionBasket' />

            {/*number of icon in the basket*/}
            <span className='header__optionLineTwo header__basketCount'>0</span>
           </div>
        </Link>
{/* You can add your links or buttons here */}</div>
      
    </nav>
  );
}

export default Header;

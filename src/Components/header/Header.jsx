import React from 'react';
import HeaderStyle from './HeaderModule.css';
import Logo from '../../assets/logo.png';
import { BiCart, BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        {/* <img src={Logo} alt='Logo' /> */}
        <span>M152</span>
      </div>

      <div className='rightSide'>
        <div className='navbar'>
          <ul className='navbarItems'>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
          </ul>
        </div>
        <BiSearch className='search' />
        <BiCart className='cart' />
      </div>
    </div>
  );
};

export default Header;

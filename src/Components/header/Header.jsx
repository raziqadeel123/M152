import React from 'react';
import HeaderStyle from './HeaderModule.css';
import { Outlet, Link } from 'react-router-dom';
import Collection from '../../Pages/Collection';
import Logo from '../../assets/shade.png';
import { Login } from '../../../src/Pages/Auth/Login';

const Header = () => {
  return (
    <nav class='navbar' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='#'>
          <img src={Logo} alt='' srcset='' width='112' height='28' />
        </a>

        <a
          role='button'
          class='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          {/* using this for humberger menu */}
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' class='navbar-menu'>
        <div class='navbar-start'>
          <Link class='navbar-item' to='/'>
            Home
          </Link>
          <Link class='navbar-item' to='/collection'>
            Brand
          </Link>

          <Link class='navbar-item' to='/collection'>
            collection
          </Link>
          <Link class='navbar-item' to='/blog'>
            Blog
          </Link>
          <Link class='navbar-item' to='/contact'>
            Contact
          </Link>
        </div>

        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <a class='button is-primary'>
                <strong>
                  <Login />
                </strong>
              </a>
              <a class='button is-light'>Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <div className='container'>
    //   <div className='logo'>
    //     {/* <img src={Logo} alt='Logo' /> */}
    //     <span>M152</span>
    //   </div>

    //   <div className='rightSide'>
    //     <div className='navbar'>
    //       <ul className='navbarItems'>
    //         <li>Collections</li>
    //         <li>Brands</li>
    //         <li>New</li>
    //         <li>Sales</li>
    //       </ul>
    //     </div>
    //     <BiSearch className='search' />
    //     <BiCart className='cart' />
    //   </div>
    // </div>
  );
};

export default Header;

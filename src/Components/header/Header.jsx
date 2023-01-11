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
          <Link class='navbar-item' to='/shop'>
            Shop
          </Link>

          <Link class='navbar-item' to='/collection'>
            Collection
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
              <Login className='navbar-item button iswarning mr-3' />

              {/* <a class=' navbar-item button iswarning mr-3 deco-none'>Signup</a> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

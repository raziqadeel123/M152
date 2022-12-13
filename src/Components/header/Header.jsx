import React from 'react';
import HeaderStyle from './HeaderModule.css';
import Logo from '../../assets/shade.png';

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
          <a class='navbar-item'>Home</a>

          <a class='navbar-item'>Brand</a>

          <div class='navbar-item has-dropdown is-hoverable'>
            <a class='navbar-link'>Collection</a>

            <div class='navbar-dropdown'>
              <a class='navbar-item'>Men</a>
              <a class='navbar-item'>Women</a>
              <a class='navbar-item'>Winter</a>
              <hr class='navbar-divider' />
              <a class='navbar-item'>Sale</a>
            </div>
          </div>
        </div>

        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <a class='button is-primary'>
                <strong>Sign up</strong>
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

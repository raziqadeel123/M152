import React from 'react';
import Header from '../Components/header/Header';

import { FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';

import img1 from './../assets/ShopImgs/shopimg.jpg';
import img2 from './../assets/ShopImgs/shopimg1.jpg';
import img3 from './../assets/ShopImgs/shopimg2.jpg';
import img4 from './../assets/ShopImgs/shopimg3.jpg';
import img5 from './../assets/ShopImgs/shopimg4.jpg';
import img6 from './../assets/ShopImgs/shopimg5.jpg';
import img7 from './../assets/ShopImgs/shopimg6.jpg';
import img8 from './../assets/ShopImgs/shopimg7.jpg';
import img9 from './../assets/ShopImgs/shopimg8.jpg';

const shop = () => {
  return (
    <>
      <Header />

      <div className='columns is-variable is-1-mobile  is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd is-3  mrl-8 mt-6'>
        <div className='column is-one-fifth pt-5 '>
          <input className='input' type='text' placeholder='Search' />
          <ul className='nav flex-column'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Jordan Air
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Sale
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Nike
              </a>
            </li>
          </ul>

          <details>
            <summary>Sport Shoes</summary>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Jordan Air
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sale
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Nike
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Men</summary>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Jordan Air
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sale
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Nike
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Women</summary>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Jordan Air
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sale
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Nike
                </a>
              </li>
            </ul>
          </details>

          <details>
            <summary>Kids</summary>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Jordan Air
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Sale
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Nike
                </a>
              </li>
            </ul>
          </details>
        </div>
        <div className='column pt-5 bg-color5'>
          <nav className='pagination' role='navigation' aria-label='pagination'>
            <a
              className='pagination-previous is-disabled'
              title='This is the first page'
            >
              Previous
            </a>
            <a className='pagination-next'>Next page</a>
            <ul className='pagination-list'>
              <li>
                <a
                  className='pagination-link is-current'
                  aria-label='Page 1'
                  aria-current='page'
                >
                  1
                </a>
              </li>
              <li>
                <a className='pagination-link' aria-label='Goto page 2'>
                  2
                </a>
              </li>
              <li>
                <a className='pagination-link' aria-label='Goto page 3'>
                  3
                </a>
              </li>
            </ul>
          </nav>
          <div className='column'>
            <div className='columns '>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img1} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>

                        <a
                          href='/singleProduct'
                          className='text-align-center mr-3'
                        >
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img2} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img3} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='columns'>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img4} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img5} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img7} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='columns'>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img8} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img9} alt='shoe img' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
              <div className='column pt-5 bg-color5'>
                <div className=''>
                  <section className='d-f fd-c'>
                    <div className='d-f fd-c'>
                      <img src={img6} alt='img shoes' />
                      <div className='d-f text-align-center f-jc'>
                        <a href='#' className='text-align-center mr-3'>
                          <FaShoppingCart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaHeart />
                        </a>
                        <a href='#' className='text-align-center mr-3'>
                          <FaEye />
                        </a>
                      </div>
                    </div>
                    <div className='panel-body text-center'>
                      <h6>
                        <a href='#' className='deco-none'>
                          Leopard Shirt Dress
                        </a>
                      </h6>
                      <p className='price'>$300.00</p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;

import React from 'react';
import Header from '../Components/header/Header';
import './pages.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import porductimg from './../assets/whiteNikeShoes.jpg';
import prodictimg1 from './../assets/ShopImgs/shopimg1.jpg';
import prodictimg2 from './../assets/ShopImgs/shopimg2.jpg';
import prodictimg3 from './../assets/ShopImgs/shopimg3.jpg';
import prodictimg4 from './../assets/ShopImgs/shopimg4.jpg';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const SingleProductPage = () => {
  // initializing the AOS
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile',
    });
  }, []);
  return (
    <div>
      <Header />
      <div className='py-5 mrl-8 is-1-mobile'>
        <div className='px-4 px-lg-5 my-5 mrl-8 is-1-mobile'>
          <div className='fd-r d-f gx-4 gx-lg-5 align-items-center disply-mob'>
            <div
              data-aos='fade-right'
              data-aos-delay='500'
              className='col-md-6 mr-5 is-1-mobile'
            >
              <img
                className='card-img-top mb-5 mb-md-0'
                src={porductimg}
                alt='white nike shoes'
              />
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='col-md-6'>
              <div className='small mb-1'>SKU: BST-498</div>
              <h1 className='display-5 fw-bolder'>white Nike Shoes</h1>
              <div className='fs-5 mb-5 is-1-mobile'>
                <span className='text-decoration-line-through mr-3'>
                  $45.00
                </span>
                <span>$40.00</span>
              </div>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className='d-flex'>
                <input
                  className='form-control text-center me-3'
                  max={3}
                  min={1}
                  type='number'
                  name=''
                  id=''
                />
                <button
                  className='btn btn-outline-dark flex-shrink-0'
                  type='button'
                >
                  <i className='bi-cart-fill me-1'></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='py-5 bg-light is-1-mobile'>
        <div
          data-aos='fade-up'
          data-aos-delay='500'
          className='mrl-8 px-4 px-lg-5 mt-5 is-1-mobile'
        >
          <h2 className='fw-bolder mb-4'>Related products</h2>
          <div className='fd-r d-f gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center  disply-mob'>
            <div className='  col mb-5  mobile-w100p is-1-mobile '>
              <div className='card h-100'>
                <img
                  className='card-img-top'
                  src={prodictimg1}
                  alt='Jordan Air 1'
                />

                <div className='card-body p-4 '>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Jordan Air 1 </h5>
                    <span className='text-muted text-decoration-line-through mr-3'>
                      $120.00
                    </span>
                    $99.00
                  </div>
                </div>

                <div className='card-footer f-jc p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a className='btn btn-outline-dark mt-auto' href='#'>
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5 ml-3  is-1-mobile mobile-w100p'>
              <div className='card h-100 '>
                <div
                  className='badge bg-dark text-white position-absolute'
                  // style='top: 0.5rem; right: 0.5rem'
                >
                  Sale
                </div>

                <img
                  className='card-img-top'
                  src={prodictimg2}
                  alt='Shoe img'
                />

                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Nike in Black</h5>
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </div>
                    <span className='text-muted text-decoration-line-through mr-3'>
                      $149.00
                    </span>
                    $129.00
                  </div>
                </div>

                <div className='card-footer f-jc p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a className='btn btn-outline-dark mt-auto' href='#'>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5 ml-3 is-1-mobile mobile-w100p'>
              <div className='card h-100'>
                <div
                  className='badge bg-dark text-white position-absolute'
                  // style='top: 0.5rem; right: 0.5rem'
                >
                  Sale
                </div>

                <img
                  className='card-img-top'
                  src={prodictimg3}
                  alt='Nike img'
                />

                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Nike in green</h5>
                    <span className='text-muted text-decoration-line-through mr-3'>
                      $90.00
                    </span>
                    $75.00
                  </div>
                </div>

                <div className='card-footer f-jc p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a className='btn btn-outline-dark mt-auto' href='#'>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col mb-5 ml-3  is-1-mobile mobile-w100p'>
              <div className='card h-100'>
                <img
                  className='card-img-top'
                  src={prodictimg4}
                  alt='shoe image'
                />

                <div className='card-body p-4'>
                  <div className='text-center'>
                    <h5 className='fw-bolder'>Nike in Gray</h5>
                    <div className='d-flex justify-content-center small text-warning mb-2'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    $90.00
                  </div>
                </div>

                <div className='card-footer f-jc p-4 pt-0 border-top-0 bg-transparent'>
                  <div className='text-center'>
                    <a className='btn btn-outline-dark mt-auto' href='#'>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductPage;

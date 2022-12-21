import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import imgBanner1 from '../../src/assets/slider-img2.jpg';
import imgBanner2 from '../../src/assets/slider-img.jpg';
import imgBanner3 from '../../src/assets/slider-img3.jpg';

const Collection = () => {
  // initializing the AOS
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='conllectionContainer'>
      <div class='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'>
        <div className='col-md-5 p-lg-5 mx-auto my-5'>
          <h1 className='display-4 font-weight-normal'>Winter Collection</h1>
          <p className='lead font-weight-normal'>
            Explore all our Winter Collection for Men, Women and Kids.
            <br /> use the code Winter22 to get 30% off per every perchase till
            end of the Year.
          </p>
          <a className='btn btn-outline-secondary' href='#'>
            Coming soon
          </a>
        </div>
        <div className='product-device box-shadow d-none d-md-block'></div>
        <div className='product-device product-device-2 box-shadow d-none d-md-block'></div>
      </div>

      <div
        data-aos='fade-left'
        className='d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 '
      >
        <div className='bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w50p h50p'>
          <div className='my-3 py-3'>
            <h2 className='display-5'>Jorden Air 1</h2>
            <p className='lead'>Presenting our Nike Air Collection</p>
          </div>
          <div className='bg-light box-shadow mx-auto b-radius'>
            <img className='b-radius' src={imgBanner1} alt='banner img' />
          </div>
        </div>
        <div
          data-aos='fade-right'
          className='bg-light  w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden '
        >
          <div className='my-3 p-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-dark box-shadow mx-auto b-radius '>
            <img className='b-radius' src={imgBanner2} alt='banner img' />
          </div>
        </div>
      </div>

      <div className='d-md-flex flex-md-equal w-100 my-md-3 pl-md-3'>
        <div className='bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
          <div className='my-3 p-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-dark box-shadow mx-auto b-radius '>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
        <div className='bg-primary w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'>
          <div className='my-3 py-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-light box-shadow mx-auto'>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
      </div>

      <div className='d-md-flex flex-md-equal w-100 my-md-3 pl-md-3'>
        <div className='bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
          <div className='my-3 p-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-white box-shadow mx-auto'>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
        <div className='bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
          <div className='my-3 py-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-white box-shadow mx-auto'>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
      </div>

      <div className='d-md-flex flex-md-equal w-100 my-md-3 pl-md-3'>
        <div className='bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
          <div className='my-3 p-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-white box-shadow mx-auto'>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
        <div className='bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
          <div className='my-3 py-3'>
            <h2 className='display-5'>Another headline</h2>
            <p className='lead'>And an even wittier subheading.</p>
          </div>
          <div className='bg-white box-shadow mx-auto'>
            <img className='b-radius' src={imgBanner3} alt='banner img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

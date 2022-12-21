import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './pages.css';
import { useEffect } from 'react';
import collimgbl1 from '../../src/assets/Collectionimg/collimg-bl.jpg';
import collimgbl2 from '../../src/assets/Collectionimg/collimg-bl1.jpg';
import collimgwh1 from '../../src/assets/Collectionimg/collimg-wh.jpg';
import collimgwh2 from '../../src/assets/Collectionimg/collimg-wh1.jpg';
import collimgor1 from '../../src/assets/Collectionimg/collimg-orange-bg.jpg';
import collimggray from '../../src/assets/Collectionimg/collimg-gray.jpg';
import Header from '../Components/header/Header';

const Collection = () => {
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
    <>
      <Header></Header>

      <div className='conllectionContainer'>
        <div class='coll-banner position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light'>
          <div className='col-md-5 p-lg-5 mx-auto my-5'>
            <h1 className='display-4 font-weight-normal'>Winter Collection</h1>
            <p className='banner-dec lead font-weight-normal'>
              Explore all our Winter Collection for Men, Women and Kids.
              <br /> use the code Winter22 to get 30% off per every perchase
              till end of the Year.
            </p>
            <a className='btn btn-outline-secondary' href='#'>
              Coming soon
            </a>
          </div>
        </div>

        <div className='  d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 '>
          <div
            data-aos='fade-left'
            className=' m-4 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w50p h50p'
          >
            <div className='my-3 py-3'>
              <h2 className='display-5'>Jorden Air 1</h2>
              <p className='lead'>Presenting our Nike Air Collection</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className=' m-4bg-light box-shadow mx-auto b-radius'>
              <img className='b-radius' src={collimgwh2} alt='banner img' />
            </div>
          </div>
          <div
            data-aos='fade-right'
            className='bg-light  w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden '
          >
            <div className='my-3 p-3'>
              <h2 className='display-5'>Men Colloection from Nike</h2>
              <p className='lead'>Presenting our Nike Men Collection</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className='m-4 bg-dark box-shadow mx-auto b-radius '>
              <img className='b-radius' src={collimgbl1} alt='banner img' />
            </div>
          </div>
        </div>

        <div className='m-4  d-md-flex flex-md-equal w-100 my-md-3 pl-md-3'>
          <div
            data-aos='fade-up'
            data-aos-delay='1000'
            className='m-4 bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'
          >
            <div className='my-3 p-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className='bg-white box-shadow mx-auto'>
              <img className='b-radius' src={collimgor1} alt='banner img' />
            </div>
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='1000'
            className='m-4 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w50p h50p'
          >
            <div className='my-3 py-3'>
              <h2 className='display-5'>Jorden Air 1</h2>
              <p className='lead'>Presenting our Nike Air Collection</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className='m-4 bg-light box-shadow mx-auto b-radius'>
              <img className='b-radius' src={collimgwh1} alt='banner img' />
            </div>
          </div>
        </div>

        <div className='d-md-flex flex-md-equal w-100 my-md-3 pl-md-3'>
          <div
            data-aos='fade-up'
            data-aos-delay='1000'
            className=' m-4 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w50p h50p'
          >
            <div className='my-3 py-3'>
              <h2 className='display-5'>Jorden Air 1</h2>
              <p className='lead'>Presenting our Nike Air Collection</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className='bg-light box-shadow mx-auto b-radius'>
              <img className='b-radius' src={collimggray} alt='banner img' />
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-delay='1000'
            className='m-4 bg-light w50p h50p mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'
          >
            <div className='my-3 py-3'>
              <h2 className='display-5'>Another headline</h2>
              <p className='lead'>And an even wittier subheading.</p>
              <a className='deco-none' href='#'>
                Explore &rarr;
              </a>
            </div>
            <div className='bg-white box-shadow mx-auto'>
              <img className='b-radius' src={collimgbl2} alt='banner img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;

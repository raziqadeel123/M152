import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productSlider.css';
import { ProductsData } from '../../data/products.js';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1020 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductSldier = () => {
  return (
    <Carousel
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass='carousel-item-padding-40-px'
      className='m-4'
    >
      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[0].img}
          alt='product image'
        />
        <h2>{ProductsData[0].name}</h2>
        <p className='price'>$120</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>
      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[1].img}
          alt='product image'
        />
        <h2>{ProductsData[1].name}</h2>
        <p className='price'>$180</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>
      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[2].img}
          alt='product image'
        />
        <h2>{ProductsData[2].name}</h2>
        <p className='price'>$130</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>
      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[3].img}
          alt='product image'
        />
        <h2>{ProductsData[3].name}</h2>
        <p className='price'>$90</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>

      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[4].img}
          alt='product image'
        />
        <h2>{ProductsData[4].name}</h2>
        <p className='price'>$190</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>

      <div className='product-card padding-4'>
        <img
          className='product--image'
          src={ProductsData[5].img}
          alt='product image'
        />
        <h2>{ProductsData[5].name}</h2>
        <p className='price'>$140</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          corporis laborum et ea numquam dicta, odit laudantium expedita culpa!
          Et?
        </p>
        <p>
          <button className='pallSide'>Add to Card</button>
        </p>
      </div>
    </Carousel>
  );
};

export default ProductSldier;

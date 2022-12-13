import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { SliderProducts } from '../../data/products.js';

const CarouselImage = () => {
  return (
    <Carousel fade className='w60p d-flex f-ja h50p m-4 f-sc'>
      <Carousel.Item className='w100p h100p'>
        <img
          className='d-block'
          src={SliderProducts[0].img}
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Nike Air </h3>
          <a className='deco-none cursor-pointer' href='#'>
            <p>{`explore>`}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='w100p h100p'>
        <img
          className='d-block '
          src={SliderProducts[1].img}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h3>Nike Air </h3>
          <a className='deco-none cursor-pointer' href='#'>
            <p>{`explore>`}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='w100p h100p'>
        <img
          className='d-block '
          src={SliderProducts[2].img}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Nike Air </h3>
          <a className='deco-none cursor-pointer' href='#'>
            <p>{`explore>`}</p>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;

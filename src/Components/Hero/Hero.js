import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { FaPlay } from 'react-icons/fa';
import './HeroStyle.css';

const Hero = () => {
  return (
    <section className='hero fd-c is-large ml-6 d-f '>
      <div class='hero-body d-f fd-c f-sc '>
        <p class='title-large'>Buy Now</p>
        <p>
          Shoes From 10+ Famous Brands of the World, shipping internationally
          and within one week return Policy
        </p>
        <div className=' d-f '>
          <button class='button is-warning mr-3 '>Get Started</button>
          <button class='button is-warning  '>
            <Link className='deco-none fontColor' to='/video'>
              Watch Now
            </Link>
            <FaPlay className='ml-2' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

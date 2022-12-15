import React from 'react';
import Typist from 'react-typist';
import bannerImg from '../../assets/blob.svg';
import './HeroStyle.css';

const Hero = () => {
  return (
    <section className='hero fd-c is-large ml-6 d-f '>
      <div class='hero-body d-f fd-c '>
        <p class='title-large'>Buy Now</p>
        <p>
          From 10+ Famouse Brands of the World, shipping internalay with one
          week return Policy
        </p>
        <div className=' d-f '>
          <button class='button is-warning mr-3 '>Get Started</button>
          <button class='button is-warning '>Watch Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

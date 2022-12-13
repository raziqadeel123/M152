import React from 'react';
import Typist from 'react-typist';
import bannerImg from '../../assets/blob.svg';
import './HeroStyle.css';

const Hero = () => {
  return (
    <section className='hero fd-r is-large ml-6 d-f '>
      <div class='hero-body'>
        <Typist className='blink hideWhenDone'>
          <Typist.Delay ms={500} />
          <p class='title-large'>Buy Now</p>
          <Typist.Delay ms={1000} />
          From 10+ Famouse Brands of the World
        </Typist>
      </div>
      <div className='w50p mr-6 mt-6'>
        <img src={bannerImg} alt='banner image' />
      </div>
    </section>
  );
};

export default Hero;

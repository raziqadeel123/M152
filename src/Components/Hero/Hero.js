import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaPlay } from 'react-icons/fa';
import './HeroStyle.css';

const Hero = () => {
  return (
    <section className='hero fd-c is-large ml-6 d-f '>
      <div class='hero-body d-f fd-c f-sc '>
        <p p class='title-large'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 250,
              strings: ['Buy Now'],
            }}
          />
        </p>

        <p>
          Shoes From 10+ Famous Brands of the World, shipping internationally
          and within one week return Policy
        </p>
        <div className=' d-f '>
          <button class='button is-warning mr-3 '>
            <Link className='deco-none fontColor' to='/shop'>
              Get Started
            </Link>
          </button>
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

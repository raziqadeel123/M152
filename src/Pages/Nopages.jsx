import React from 'react';
import PageNotFoundImg from '../assets/page-Not-Found.svg';
import Header from '../Components/header/Header';
import './pages.css';

const Nopages = () => {
  return (
    <>
      <Header />
      <div className='d-f f-jc  '>
        <img className='mt-6' src={PageNotFoundImg} alt='page not found img' />
      </div>
    </>
  );
};

export default Nopages;

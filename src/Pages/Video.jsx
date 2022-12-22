import React from 'react';
import videobg from '../assets/Videos/bg.mp4';
import Header from '../Components/header/Header';
import './pages.css';

const Video = () => {
  return (
    <>
      <Header />
      <div className='main-section'>
        <div className='overlay'></div>
        <video src={videobg} autoPlay loop muted></video>
        <div className='video-content'>
          <h4>Move with us</h4>
          <p>faster and safe </p>
          <button className='button is-link'>Explore</button>
        </div>
      </div>
    </>
  );
};

export default Video;

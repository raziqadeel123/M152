import React from 'react';
import videobg from '../assets/Videos/bg.mp4';
import './pages.css';

const Video = () => {
  return (
    <div className='main-section'>
      <div className='overlay'></div>
      <video src={videobg} autoPlay loop muted></video>
      <div className='video-content'>
        <h4>Move with us</h4>
        <p>faster and safe </p>
      </div>
    </div>
  );
};

export default Video;

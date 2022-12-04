import React from 'react';
import CallToActionStyle from './CallToActionModule.css';
import callToActoinImg from '../../assets/action_Img.png';
function CallToAction() {
  return (
    <div className='callToActionconatiner'>
      <div className='topSideText'>
        <h1>Trendy Collection</h1>
        <span className='text1'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ratione
          iure omnis animi tempore, ipsum
        </span>
      </div>
      <div className='middleImg'>
        <img src={callToActoinImg} alt='Nike shoes' />
      </div>
      <div className='links'>
        <ul>
          <li>
            <a href='#'> Learn more &#62;</a>
          </li>
          <li>
            <a href='#'> Buy &#62;</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CallToAction;

import React from 'react';
import NewsletterImg from '../../assets/undraw_Newsletter.png';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className=' row d-flex justify-content-center align-items-center rows mt-6 mb-6'>
      <div className='col-md-6 mt-6 mb-6'>
        <div className='card mt-6 mb-6'>
          <div className='text-center'>
            <img src={NewsletterImg} width='300' />
            <span className='d-block mt-3'>
              Subscribe to our newsletter in order not to miss new arrivals
              <br /> promotions and discounts of our store
            </span>

            <div className='mx-5 mb-6'>
              <div className='input-group mb-3 mt-4'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your email'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  className='btn btn-success border-rad'
                  type='button'
                  id='button-addon2'
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

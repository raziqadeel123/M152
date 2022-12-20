import React from 'react';
import NewsletterImg from '../../assets/undraw_Newsletter.png';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div class=' row d-flex justify-content-center align-items-center rows mt-6 mb-6'>
      <div class='col-md-6 mt-6 mb-6'>
        <div class='card mt-6 mb-6'>
          <div class='text-center'>
            <img src={NewsletterImg} width='300' />
            <span class='d-block mt-3'>
              Subscribe to our newsletter in order not to miss new arrivals
              <br /> promotions and discounts of our store
            </span>

            <div class='mx-5 mb-6'>
              <div class='input-group mb-3 mt-4'>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Enter your email'
                  aria-label="Recipient's username"
                  aria-describedby='button-addon2'
                />
                <button
                  class='btn btn-success border-rad'
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

import React from 'react';
import contactimg from '../assets/Contact-img.jpg';
import Header from '../Components/header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  // initializing the AOS
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable: 'mobile',
    });
  }, []);

  return (
    <>
      <Header />

      <div className='columns box-shadow1 mrl-8 mt-6 is-1-mobile '>
        <div
          data-aos='fade-right'
          data-aos-delay='500'
          className='column is-half'
        >
          <img
            className='img-wh mrl-8 mt-6 is-1-mobile '
            src={contactimg}
            alt=''
          />
        </div>
        <div
          data-aos='fade-left'
          data-aos-delay='500'
          className='column is-half'
        >
          <form action='' className='mrl-8 mt-6 mb-5  is-1-mobile '>
            <div className='field '>
              <label className='label'>Name</label>
              <div className='control'>
                <input className='input' type='text' placeholder='Your name' />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Username</label>
              <div className='control has-icons-left has-icons-right'>
                <input className='input' type='text' placeholder='Username' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </div>
              <p className='help is-success'>This username is available</p>
            </div>

            <div className='field'>
              <label className='label'>Email</label>
              <div className='control has-icons-left has-icons-right'>
                <input className='input' type='email' placeholder='Email' />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-exclamation-triangle'></i>
                </span>
              </div>
              <p className='help is-danger'>This email is invalid</p>
            </div>

            <div className='field'>
              <label className='label'>Role</label>
              <div className='control'>
                <div className='select'>
                  <select>
                    <option>Select your Role</option>
                    <option>Manager</option>
                    <option>Hr</option>
                    <option>Developer</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='field'>
              <label className='label'>Message</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder='your message'
                ></textarea>
              </div>
            </div>

            <div className='field'>
              <div className='control'>
                <label className='checkbox'>
                  <input type='checkbox' />I agree to the
                  <a href='#'> terms and conditions</a>
                </label>
              </div>
            </div>

            <div className='field'>
              <div className='control'>
                <label className='radio'>
                  <input type='radio' name='question' />
                  Yes
                </label>
                <label className='radio'>
                  <input type='radio' name='question' />
                  No
                </label>
              </div>
            </div>

            <div className='field is-grouped'>
              <div className='control'>
                <button className='button is-link'>Submit</button>
              </div>
              <div className='control'>
                <button className='button is-link is-light'>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

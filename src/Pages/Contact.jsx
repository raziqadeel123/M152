import React from 'react';
import contactimg from '../assets/Contact-img.jpg';
import Header from '../Components/header/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className='Contact-Container d-f '>
        <div className=' w50p h100p'>
          <img className='w50p h100p mrl-8 mt-6 ' src={contactimg} alt='' />
        </div>
        <div className='whiteBg w50p h100p '>
          <form action='' className='mrl-8 mt-6 '>
            <div class='field '>
              <label class='label'>Name</label>
              <div class='control'>
                <input class='input' type='text' placeholder='Text input' />
              </div>
            </div>

            <div class='field'>
              <label class='label'>Username</label>
              <div class='control has-icons-left has-icons-right'>
                <input class='input' type='text' placeholder='Text input' />
                <span class='icon is-small is-left'>
                  <i class='fas fa-user'></i>
                </span>
                <span class='icon is-small is-right'>
                  <i class='fas fa-check'></i>
                </span>
              </div>
              <p class='help is-success'>This username is available</p>
            </div>

            <div class='field'>
              <label class='label'>Email</label>
              <div class='control has-icons-left has-icons-right'>
                <input class='input' type='email' placeholder='Text input' />
                <span class='icon is-small is-left'>
                  <i class='fas fa-envelope'></i>
                </span>
                <span class='icon is-small is-right'>
                  <i class='fas fa-exclamation-triangle'></i>
                </span>
              </div>
              <p class='help is-danger'>This email is invalid</p>
            </div>

            <div class='field'>
              <label class='label'>Role</label>
              <div class='control'>
                <div class='select'>
                  <select>
                    <option>Select your Role</option>
                    <option>Manager</option>
                    <option>Hr</option>
                    <option>Developer</option>
                  </select>
                </div>
              </div>
            </div>

            <div class='field'>
              <label class='label'>Message</label>
              <div class='control'>
                <textarea class='textarea' placeholder='Textarea'></textarea>
              </div>
            </div>

            <div class='field'>
              <div class='control'>
                <label class='checkbox'>
                  <input type='checkbox' />I agree to the{' '}
                  <a href='#'>terms and conditions</a>
                </label>
              </div>
            </div>

            <div class='field'>
              <div class='control'>
                <label class='radio'>
                  <input type='radio' name='question' />
                  Yes
                </label>
                <label class='radio'>
                  <input type='radio' name='question' />
                  No
                </label>
              </div>
            </div>

            <div class='field is-grouped'>
              <div class='control'>
                <button class='button is-link'>Submit</button>
              </div>
              <div class='control'>
                <button class='button is-link is-light'>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

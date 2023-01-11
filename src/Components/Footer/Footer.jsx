import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaReply,
  FaRetweet,
  FaHeart,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import './Footer.css';
import instaIMG1 from '../../assets/productimg/productimg1.jpg';
import instaIMG2 from '../../assets/productimg/productimg2.jpg';
import instaIMG3 from '../../assets/productimg/productimg3.jpg';
import instaIMG4 from '../../assets/productimg/productimg4.jpg';
import profileImg from '../../assets/Twitter-img/profile-img1.jpg';
import profileImg1 from '../../assets/Twitter-img/profile-img2.jpg';
import profileImg2 from '../../assets/Twitter-img/profile-img3.jpg';

const Footer = () => {
  return (
    <div className='Footer-conatiner mtb-12'>
      <footer className='mt-6 mb-6'>
        <div className='d-f fd-r f-gap f-ja mrl-8 mt-6  mb-6'>
          <div className='col-md pr-md-5 mb-4 mb-md-0'>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam itaque unde facere repellendus, odio et iste voluptatum
              aspernatur ratione mollitia tempora eligendi maxime est,
              blanditiis accusamus. Incidunt, aut, quis!
            </p>
            <ul className='list-unstyled quick-info mb-4'>
              <li>
                <a href='#' className='d-flex align-items-center'>
                  <span className='icon mr-3 icon-phone'>
                    <FaPhone />
                  </span>
                  +1 291 3912 329
                </a>
              </li>
              <li>
                <a href='#' className='d-flex align-items-center'>
                  <span className='icon mr-3 icon-envelope'>
                    <FaEnvelope />
                  </span>
                  info@gmail.com
                </a>
              </li>
            </ul>
            <form action='#' className='d-flex'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your e-mail'
              />
              {/* <input type='submit' className='btn btn-submit' value='Send' /> */}
              <button
                className='btn btn-success border-rad'
                type='button'
                id='button-addon2'
              >
                Subscribe
              </button>
            </form>

            <div className='soialmedia mt-5 d-f fd-c'>
              <div className='text'>
                <h3>Conntect with us</h3>
              </div>
              <ul className='d-f pl-0'>
                <li className='ml-2 pl-0'>
                  <span>
                    <a class='level-item'>
                      <span class='icon is-small'>
                        <i class='fas fa-retweet'>
                          <FaFacebook />
                        </i>
                      </span>
                    </a>
                  </span>
                </li>

                <li className='ml-2'>
                  <span>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaInstagram />
                        </i>
                      </span>
                    </a>
                  </span>
                </li>

                <li className='ml-2'>
                  <span>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaLinkedin />
                        </i>
                      </span>
                    </a>
                  </span>
                </li>

                <li className='ml-2'>
                  <span>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaYoutube />
                        </i>
                      </span>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md mb-4 mb-md-0 mb-3'>
            <h3>Latest Tweet</h3>
            <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src={profileImg} />
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-reply'>
                          <FaReply />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaRetweet />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-heart'>
                          <FaHeart />
                        </i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>

            <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src={profileImg1} />
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>Thomas Winter</strong> <small>@TWinter</small>{' '}
                    <small>21m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-reply'>
                          <FaReply />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaRetweet />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-heart'>
                          <FaHeart />
                        </i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>

            <article className='media'>
              <figure className='media-left'>
                <p className='image is-64x64'>
                  <img src={profileImg2} />
                </p>
              </figure>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>Leo Summer</strong> <small>@LeoSummer</small>{' '}
                    <small>51m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut.
                  </p>
                </div>
                <nav className='level is-mobile'>
                  <div className='level-left'>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-reply'>
                          <FaReply />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-retweet'>
                          <FaRetweet />
                        </i>
                      </span>
                    </a>
                    <a className='level-item'>
                      <span className='icon is-small'>
                        <i className='fas fa-heart'>
                          <FaHeart />
                        </i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div className='media-right'>
                <button className='delete'></button>
              </div>
            </article>
          </div>
          <div className=''>
            <h3>Instagram</h3>
            <div className='d-f fd-c '>
              <div className='d-f '>
                <a href='#' className='pr-2 pb-2 pt-2 pl-2 hover-zoom'>
                  <img className='mini-img ' src={instaIMG1} alt='Image' />
                </a>
                <a href='#' className='pr-2 pb-2 pt-2 pl-2'>
                  <img className='mini-img   ' src={instaIMG2} alt='Image' />
                </a>
              </div>
              <div className='d-f'>
                <a href='#' className='pr-2 pb-2 pt-2 pl-2 '>
                  <img className='mini-img  ' src={instaIMG3} alt='Image' />
                </a>
                <a href='#' className='pr-2 pb-2 pt-2 pl-2'>
                  <img className='mini-img  ' src={instaIMG4} alt='Image' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='d-f f-jc mt-6 mb-0'>
        <div className='mt-6 mb-0'>
          <ul className='d-f mt-6 mb-0 '>
            <li className='mr-3'>
              <a href='/impressum'>Impressum</a>
            </li>
            <li className='mr-3'>
              <a href='/comingsoon'>Datenschutz</a>
            </li>
            <li className='mr-3'>
              <a href='/quellen'>Quellen</a>
            </li>
            <li className='mr-3'>
              <a href='/comingsoon'>Reflexion</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

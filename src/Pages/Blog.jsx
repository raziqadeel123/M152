import React, { useState } from 'react';
import Header from '../Components/header/Header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { motion, useScroll } from 'framer-motion';
import img1 from './../assets/slider-img2.jpg';
import img2 from './../assets/jordan.jpg';
import img3 from './../assets/slider-img3.jpg';
import img4 from './../assets/slider-img.jpg';
import avatar from './../assets/TeamImages/avatar-1.jpg';
import avatar1 from './../assets/TeamImages/avatar-2.jpg';
import avatar3 from './../assets/TeamImages/avatar-3.jpg';
import avatar4 from './../assets/TeamImages/avatar-4.jpg';

import './pages.css';

const Blog = () => {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />

      <div className='p-4 p-md-5 mb-4 text-white rounded bg-dark banner-img mrl-8 is-1-mobile'>
        <div className='col-md-6 px-0'>
          <h1 className='display-4 fst-italic'>
            Title of a longer featured blog post
          </h1>
          <p className='lead my-3'>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>

          <p>
            <a href='#' className='stretched-link' onClick={handleShow}>
              Continue reading
            </a>
          </p>
        </div>
      </div>

      <nav className='level is-mobile mrl-8 is-1-mobile disply-mob'>
        <div className='level-left'>
          <div className='level-item'>
            <p className='subtitle is-5'>
              <strong>123</strong> posts
            </p>
          </div>
          <div className='level-item'>
            <div className='field has-addons'>
              <p className='control'>
                <input
                  className='input'
                  type='text'
                  placeholder='Find a post'
                />
              </p>
              <p className='control'>
                <button className='button'>Search</button>
              </p>
            </div>
          </div>
        </div>

        <div className='level-right'>
          <p className='level-item'>
            <strong>All</strong>
          </p>
          <p className='level-item'>
            <a>Published</a>
          </p>
          <p className='level-item'>
            <a>Drafts</a>
          </p>
          <p className='level-item'>
            <a>Deleted</a>
          </p>
          <p className='level-item'>
            <a className='button is-success'>New</a>
          </p>
        </div>
      </nav>

      <div className='columns is-mobile mrl-8 is-1-mobile disply-mob '>
        <div className='column is-half mobile-w100p'>
          <div className='card mb-3'>
            <img src={img1} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <p className='title'>
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p className='subtitle'>Jeff Atwood</p>
            </div>
            <footer className='card-footer'>
              <p className='card-footer-item'>
                <span>
                  View on{' '}
                  <a href='https://twitter.com/codinghorror/status/506010907021828096'>
                    Twitter
                  </a>
                </span>
              </p>
              <p className='card-footer-item'>
                <span>
                  Share on <a href='#'>Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-content'>
              <p className='title'>
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p className='subtitle'>Jeff Atwood</p>
            </div>
            <footer className='card-footer'>
              <p className='card-footer-item'>
                <span>
                  View on{' '}
                  <a href='https://twitter.com/codinghorror/status/506010907021828096'>
                    Twitter
                  </a>
                </span>
              </p>
              <p className='card-footer-item'>
                <span>
                  Share on <a href='#'>Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>

      <nav className='level mtb-12 is-1-mobile mob-p-4'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Tweets</p>
            <p className='title'>3,456</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Following</p>
            <p className='title'>123</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Followers</p>
            <p className='title'>456K</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Likes</p>
            <p className='title'>789</p>
          </div>
        </div>
      </nav>

      <div className='columns is-mobile mrl-8 mtb-12 is-1-mobile disply-mob'>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src={img1} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src={avatar} alt='Placeholder image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>John Smith</p>
                  <p className='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src={img3} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src={avatar1} alt='Placeholder image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>John Smith</p>
                  <p className='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src={img4} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src={avatar3} alt='Placeholder image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>John Smith</p>
                  <p className='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card'>
            <div className='card-image'>
              <figure className='image is-4by3'>
                <img src={img2} alt='Placeholder image' />
              </figure>
            </div>
            <div className='card-content'>
              <div className='media'>
                <div className='media-left'>
                  <figure className='image is-48x48'>
                    <img src={avatar4} alt='Placeholder image' />
                  </figure>
                </div>
                <div className='media-content'>
                  <p className='title is-4'>John Smith</p>
                  <p className='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div className='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

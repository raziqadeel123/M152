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

      <div class='p-4 p-md-5 mb-4 text-white rounded bg-dark banner-img mrl-8'>
        <div class='col-md-6 px-0'>
          <h1 class='display-4 fst-italic'>
            Title of a longer featured blog post
          </h1>
          <p class='lead my-3'>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>

          <p>
            <a href='#' class='stretched-link' onClick={handleShow}>
              Continue reading
            </a>
          </p>
          <motion.div
            className='progress-bar'
            style={{ scaleX: scrollYProgress }}
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Comming soon ...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h3>heading </h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellendus maiores explicabo cupiditate reiciendis provident
                  magnam, quae blanditiis obcaecati ipsum voluptates architecto
                  a incidunt! Perspiciatis ullam modi nemo quisquam tempore
                  sint? Cras mattis consectetur purus sit amet fermentum. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
                  leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </p>
                <h3>Second Level</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                  non metus auctor fringilla. Cras mattis consectetur purus sit
                  amet fermentum. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                  vestibulum at eros.
                </p>
                Quisque ante lacus, malesuada ac auctor vitae, congue non ante.
                Phasellus lacus ex, semper ac tortor nec, fringilla condimentum
                orci. Fusce eu rutrum tellus. Donec blandit a lorem id
                convallis. Cras gravida arcu at diam gravida gravida. Integer in
                volutpat libero. Donec a diam tellus. Aenean nec tortor orci.
                Quisque aliquam cursus urna, non bibendum massa viverra eget.
                Vivamus maximus ultricies pulvinar.
                <ul>
                  <li>congue non ante. Phasellus lacus ex</li>
                  <li>Fusce eu rutrum tellus.</li>
                  <li>Donec blandit a lorem id convallis.</li>
                  <li>Cras gravida arcu at diam gravida gravida. </li>
                  <li>Integer in volutpat libero.</li>
                  <li>Cras gravida arcu at diam gravida gravida. </li>
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <nav class='level is-mobile mrl-8'>
        <div class='level-left'>
          <div class='level-item'>
            <p class='subtitle is-5'>
              <strong>123</strong> posts
            </p>
          </div>
          <div class='level-item'>
            <div class='field has-addons'>
              <p class='control'>
                <input class='input' type='text' placeholder='Find a post' />
              </p>
              <p class='control'>
                <button class='button'>Search</button>
              </p>
            </div>
          </div>
        </div>

        <div class='level-right'>
          <p class='level-item'>
            <strong>All</strong>
          </p>
          <p class='level-item'>
            <a>Published</a>
          </p>
          <p class='level-item'>
            <a>Drafts</a>
          </p>
          <p class='level-item'>
            <a>Deleted</a>
          </p>
          <p class='level-item'>
            <a class='button is-success'>New</a>
          </p>
        </div>
      </nav>

      <div class='columns is-mobile mrl-8'>
        <div class='column is-half'>
          <div class='card mb-3'>
            <img src={img1} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class='card-text'>
                <small class='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-content'>
              <p class='title'>
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p class='subtitle'>Jeff Atwood</p>
            </div>
            <footer class='card-footer'>
              <p class='card-footer-item'>
                <span>
                  View on{' '}
                  <a href='https://twitter.com/codinghorror/status/506010907021828096'>
                    Twitter
                  </a>
                </span>
              </p>
              <p class='card-footer-item'>
                <span>
                  Share on <a href='#'>Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-content'>
              <p class='title'>
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
              <p class='subtitle'>Jeff Atwood</p>
            </div>
            <footer class='card-footer'>
              <p class='card-footer-item'>
                <span>
                  View on{' '}
                  <a href='https://twitter.com/codinghorror/status/506010907021828096'>
                    Twitter
                  </a>
                </span>
              </p>
              <p class='card-footer-item'>
                <span>
                  Share on <a href='#'>Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>

      <nav class='level mtb-12'>
        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Tweets</p>
            <p class='title'>3,456</p>
          </div>
        </div>
        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Following</p>
            <p class='title'>123</p>
          </div>
        </div>
        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Followers</p>
            <p class='title'>456K</p>
          </div>
        </div>
        <div class='level-item has-text-centered'>
          <div>
            <p class='heading'>Likes</p>
            <p class='title'>789</p>
          </div>
        </div>
      </nav>

      <div class='columns is-mobile mrl-8 mtb-12'>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-4by3'>
                <img src={img1} alt='Placeholder image' />
              </figure>
            </div>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src={avatar} alt='Placeholder image' />
                  </figure>
                </div>
                <div class='media-content'>
                  <p class='title is-4'>John Smith</p>
                  <p class='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-4by3'>
                <img src={img3} alt='Placeholder image' />
              </figure>
            </div>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src={avatar1} alt='Placeholder image' />
                  </figure>
                </div>
                <div class='media-content'>
                  <p class='title is-4'>John Smith</p>
                  <p class='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-4by3'>
                <img src={img4} alt='Placeholder image' />
              </figure>
            </div>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src={avatar3} alt='Placeholder image' />
                  </figure>
                </div>
                <div class='media-content'>
                  <p class='title is-4'>John Smith</p>
                  <p class='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div class='content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href='#'>#css</a> <a href='#'>#responsive</a>
                <br />
                <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class='column'>
          <div class='card'>
            <div class='card-image'>
              <figure class='image is-4by3'>
                <img src={img2} alt='Placeholder image' />
              </figure>
            </div>
            <div class='card-content'>
              <div class='media'>
                <div class='media-left'>
                  <figure class='image is-48x48'>
                    <img src={avatar4} alt='Placeholder image' />
                  </figure>
                </div>
                <div class='media-content'>
                  <p class='title is-4'>John Smith</p>
                  <p class='subtitle is-6'>@johnsmith</p>
                </div>
              </div>

              <div class='content'>
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

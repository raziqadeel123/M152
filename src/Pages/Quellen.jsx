import React from 'react';
import './pages.css';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../Components/header/Header';

const Quellen = () => {
  return (
    <>
      <Header />

      <div className='columns border-shadow mrl-8 mtb-12'>
        <div className='column is-half'>
          <h4>Quellenangaben </h4>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Framework</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='https://react-bootstrap.netlify.app/getting-started/introduction/'>
                      Bootstrap
                    </a>
                  </li>

                  <li>
                    <a href='https://bulma.io/documentation/'>Bulma</a>
                  </li>
                  <li>
                    <a href='https://reactjs.org/'>React</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>Bilder</Accordion.Header>
              <Accordion.Body>
                Alle Bilder und Illustrationen, die ich in diesem Projekt
                verwendet habe, sind Open Source und lizenzfrei.
                <ul>
                  <h6>illustration</h6>
                  <li>
                    <a href='https://undraw.co/illustrations' target='_blank'>
                      undraw
                    </a>
                  </li>
                  <h6>Bilder</h6>
                  <li>
                    <a
                      href='https://unsplash.com/s/photos/shoes'
                      target='_blank'
                    >
                      unsplash
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://www.pexels.com/search/shoes/'
                      target='_blank'
                    >
                      pexels
                    </a>
                  </li>

                  <li>
                    <a href='https://this-person-does-not-exist.com/en'>
                      This person does not exist
                    </a>
                  </li>

                  <h6>Hintergrund Bilder</h6>

                  <li>
                    <a href='https://bgjar.com/colored-shapes'>bgjar</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Icons</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='https://react-icons.github.io/react-icons'>
                      react icons
                    </a>
                  </li>
                  <li>
                    <a href='https://bulma.io/documentation/elements/icon/'>
                      Bulma icons
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>Css</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='https://getcssscan.com/css-box-shadow-examples'>
                      Box Shadow
                    </a>
                  </li>
                  <li>
                    <a href='https://blog.devgenius.io/how-to-add-scrolling-animations-to-reactjs-by-using-aos-cefa020a1604'>
                      Aos animation
                    </a>
                  </li>
                  <li>
                    <a href='https://www.npmjs.com/package/react-multi-carousel'>
                      Carousel
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>Design-Inspiration</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='https://www.apple.com/chde/'>Apple</a>
                  </li>
                  <li>
                    <a href='https://www.bootdey.com/snippets/tagged/product'>
                      Product page
                    </a>
                  </li>
                  <li>
                    <a href='https://github.com/startbootstrap/startbootstrap-shop-item'>
                      single product
                    </a>
                  </li>
                  <li>
                    <a href='https://dribbble.com/tags/web_design_inspiration'>
                      dribbble
                    </a>
                  </li>
                  <li>
                    <a href='https://getbootstrap.com/docs/4.0/examples/'>
                      bootstrap
                    </a>
                  </li>
                  <li>
                    <a href='https://freefrontend.com/bootstrap-footers/'>
                      freefrontend
                    </a>
                  </li>
                  <li>
                    <a href='https://colorlib.com/wp/bootstrap-contact-form/'>
                      Footer
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Quellen;

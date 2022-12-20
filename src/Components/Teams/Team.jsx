import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import personImg from '../../assets/TeamImages/avatar-1.jpg';
import personImg1 from '../../assets/TeamImages/avatar-2.jpg';
import personImg2 from '../../assets/TeamImages/avatar-3.jpg';
import personImg3 from '../../assets/TeamImages/avatar-4.jpg';
import personImg4 from '../../assets/TeamImages/avatar-5.jpg';
import personImg5 from '../../assets/TeamImages/avatar-6.jpg';
import { FaPhone, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
const Team = () => {
  return (
    <div className='teamContainer d-f f-gap-5 ml-2 mr-2 mtb-12 '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg} />
        <Card.Body>
          <Card.Title>Lara Winter</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>CEO</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg1} />
        <Card.Body>
          <Card.Title>Leo Summer</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>CTO</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg2} />
        <Card.Body>
          <Card.Title>Thomas Winter</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>CFO</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg3} />
        <Card.Body>
          <Card.Title>Thomas Müller</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>HR Lead</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg4} />
        <Card.Body>
          <Card.Title>Sofia Jeff</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            Marketing Lead
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={personImg5} />
        <Card.Body>
          <Card.Title>Michael Winter</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>CEO</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className='soialmedia mt-3 d-f fd-c'>
            <ul className='d-f pl-0'>
              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaPhone />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaLinkedin />
                      </i>
                    </span>
                  </a>
                </span>
              </li>

              <li className='ml-2'>
                <span>
                  <a class='level-item'>
                    <span class='icon is-small'>
                      <i class='fas fa-retweet'>
                        <FaEnvelope />
                      </i>
                    </span>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;

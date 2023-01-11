import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Login } from '../../Pages/Auth/Login';

const Header = () => {
  return (
    <>
      <Navbar bg='light' expand={false} className='mb-3'>
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement='start'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>M152</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link>
                  <Link className='navbar-item deco-none' to='/'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='navbar-item deco-none' to='/shop'>
                    Shop
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='navbar-item deco-none' to='/collection'>
                    Collection
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link className='navbar-item deco-none' to='/blog'>
                    Blog
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link className='navbar-item deco-none' to='/contact'>
                    Contact
                  </Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div class='buttons'>
            <Login className='navbar-item button iswarning mr-3' />
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

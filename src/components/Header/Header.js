import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/logo/Navigation/Navigation/car logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            src={logo}
                            width="90"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} className='nav-style' to=''>Home</Nav.Link>
                            <Nav.Link as={Link} className='nav-style' to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} className='nav-style' to='/login'>Login</Nav.Link>
                            <Nav.Link as={Link} className='nav-style' to='/register'>Register</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
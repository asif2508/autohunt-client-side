import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/logo/Navigation/Navigation/car logo.png';
import {Link} from 'react-router-dom';
import './Header.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
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
                            <Nav.Link as={Link} className='nav-style' to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} className='nav-style' to='/blogs'>Blogs</Nav.Link>
                            {
                                user ? 
                                <>
                                <Nav.Link as={Link} className='nav-style' to='/manageinventories'>ManageItem</Nav.Link>
                                <Nav.Link as={Link} className='nav-style' to='/additem'>AddItem</Nav.Link>
                                <Nav.Link as={Link} className='nav-style' to='/myitems'>MyItems</Nav.Link>
                                <Nav.Link as={Link} onClick={()=> signOut(auth)} className='nav-style' to='/'>Logout</Nav.Link>
                                </>
                                :
                                <Nav.Link as={Link} className='nav-style' to='/login'>Login</Nav.Link>
                            }
                            {
                                user ? 
                                ''
                                :
                                <Nav.Link as={Link} className='nav-style' to='/register'>Register</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
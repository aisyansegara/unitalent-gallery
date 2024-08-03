import React from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand className="text-light">
                    <Link to='/' className='text-decoration-none text-light d-flex'>
                        <img className='me-2' src="" alt="" />
                        UniTalent Gallery
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className="text light" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 justify-content-center'>
                        <Nav.Link href='/' className='text-light'>Home</Nav.Link>
                        {/* <Nav.Link href='/marketplaces' className='text-light'>Marketplace</Nav.Link> */}
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/marketplace/health">Health Care</NavDropdown.Item>
                            <NavDropdown.Item href="/marketplace/smart-home">Smart Home</NavDropdown.Item>
                            <NavDropdown.Item href="/marketplace/smart-industry">Smart Industry</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/blogs' className='text-light'>Blog</Nav.Link>
                        <Nav.Link href='/about-us' className='text-light'>About Us</Nav.Link>
                    </Nav>
                    <Button variant='light'>
                        <Link to='/' className='text-decoration-none text-dark text-nowrap'>Sign In</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
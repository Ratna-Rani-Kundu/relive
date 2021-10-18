import React from 'react';
import './Header.css'
import { Navbar,Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="success" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ReLive</Navbar.Brand>
    <Nav className="me-auto text-light">
      <Link className='text-light nav-link p-4 ' to="/home">Home</Link>
      <Link className='text-light nav-link p-4' to="/service">Service</Link>
      <Link className='text-light nav-link p-4' to="/psycologist">Psycologist</Link>
    </Nav>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>

    </Container>
  </Navbar>
        </>
    );
};

export default Header;
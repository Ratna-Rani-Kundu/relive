import React from 'react';
import './Header.css'
import { Navbar,Container, Nav,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
  const {user,logout}=useFirebase();
    return (
        <>
  <Navbar collapseOnSelect expand="lg"  sticky="top" bg="success" variant="dark">
  <Container>
  <Navbar.Brand href="#home">ReLive</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className='text-light nav-link p-4 ' to="/home">Home</Link>
    <Link className='text-light nav-link p-4' to="/about">About</Link>
      <Link className='text-light nav-link p-4' to="/service">Services</Link>
      <Link className='text-light nav-link p-4' to="/appointment">Appointment</Link>
      <Link className='text-light nav-link p-4' to="/contact">Contact</Link>
      <Link className='text-light nav-link p-4' to="/login">Log In</Link>
      
      
    </Nav>
  </Navbar.Collapse>
  <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: {user?.displayName} {user?.displayName && <Button onClick={logout}>Log out</Button>}
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import Logo from './Logo';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            {/* <Logo /> */}
            <Navbar.Brand href="#home">Clarafi</Navbar.Brand>
        </Navbar>
    );
}
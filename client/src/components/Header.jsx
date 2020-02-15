import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// import Logo from './Logo';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            {/* <Logo /> */}
            <Navbar.Brand href="#home">Clarify</Navbar.Brand>
            <li class="nav-item" className="list-none">
                <a className="nav-link" href="#">Hosted</a>
            </li>
            <li class="nav-item" className="list-none">
                <a className="nav-link" href="#">Attended</a>
            </li>
        </Navbar>
    );
}
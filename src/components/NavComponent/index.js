import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const NavComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand >Eric Gustafson</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/about" className="btn m-2 btn-success">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio" className="btn m-2 btn-success">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/resume" className="btn m-2 btn-success">Resume</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="btn m-2 btn-success">Contact</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-2" href="https://github.com/eric-gustafson1" target="_blank"><FontAwesomeIcon icon={faGithub} /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="m-2" href="https://www.linkedin.com/in/eric-gustafson-4006b4/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );


}

export default NavComponent;
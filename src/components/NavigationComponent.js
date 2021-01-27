import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <div className="navblack navbar-dark">
      <Navbar expand="md" >
        <NavbarBrand href="/home">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/characters">Character Guide</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/episodes">Episode Guide</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/puzzle">Puzzle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/meme">Meme Generator</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  );
}

export default Navigation;
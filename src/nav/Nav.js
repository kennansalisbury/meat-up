import React, { useState } from 'react'
import img from './method-draw-image.png' 
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
            <div>
              <br/>
            <Navbar className="navbar" color="faded" light>
            {/* <NavbarToggler onClick={toggleNavbar} className="mr-2 Menu" /> */}
            <img src="https://img.icons8.com/doodle/30/000000/menu.png" className="Menu"></img>
            {/* <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            </Nav>
            </Collapse> */}
            <NavbarBrand href="/" className="AppTitle link">Meat-Up</NavbarBrand>
            <img src={img} className="profileImage"></img>
            </Navbar>
            </div>
    );
  }

export default NavBar;
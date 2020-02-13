import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
            <Navbar color="faded" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            {/* <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
            </Nav>
            </Collapse> */}
            <NavbarBrand href="/" className="App">reactstrap</NavbarBrand>
            
            </Navbar>
    );
  }

export default NavBar;
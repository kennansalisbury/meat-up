import React, { useState } from 'react'
import img from './method-draw-image.png' 


const Footer = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

            <>
            <h2>Meat-Up</h2>
            </>
    );
  }

export default Footer;
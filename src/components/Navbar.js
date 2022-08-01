import React from 'react';
import './Navbar.css';
import logo from '../images/logo192.png';

  function Navbar(){
    return (
        <nav>
            {/* <img src={require('../images/logo192.png')}/> */}
            <img  src={logo} alt="Logo" className='nav--icon'/>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    )

}
//my-app/src/images/logo-react-icon.png
export default Navbar;
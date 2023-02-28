import React from 'react';
import './index.css';
import logo from '../src/assets/milblock.jpeg';
import SearchBar from './SearchBar.js'
import Clock from './Clock';

function NavBar(){
    // function btnDropdown(){
    //     var x = document.getElementById("topNavbar");
    //     if (x.className === "topNavbar") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topNavbar";
    //     }
    // }
    return(
        <div className='NavBar' id='topNavbar'>
            <div className='logo'>
            <a href="#home" ><img src={logo} alt="" /></a>
            </div>
            <nav>
                <a href="#home" className=''>Home</a>
                <a href="#about" className=''>About</a>
                <a href="#contact" className=''>Contact</a>
                <a href='#javascript'className='icon'><i className='fa fa-bars'></i></a>
                
                    
                <SearchBar />
                <Clock />
                
            </nav>
        </div>
    )
}

export default NavBar
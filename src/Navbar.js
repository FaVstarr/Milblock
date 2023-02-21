import React from 'react';
import './index.css'

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
            <a href="#home" className='logo'><img src="./Images" alt="" /></a>
            <h1>
                Milblock
            </h1>
            <nav>
                <a href="#home" className='float'>Home</a>
                <a href="#about" className='float'>About</a>
                <a href="#contact" className='float'>Contact</a>
                <a href='#javascript'className='icon' 
                // onClick={btnDropdown()}
                ><i className='fa fa-bars'></i></a>
                {/* <button className='icon' onClick={btnDropdown()}>
                <i className='fa fa-bars'></i>
                </button> */}
                    
                

                <input type="text" placeholder='Search...' className='searchbar' />
                <button type="submit" className='searchbarButton'><i className='fa fa-search'></i></button>
            </nav>
        </div>
    )
}

export default NavBar
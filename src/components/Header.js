/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import 'react-scroll';
import { Link } from 'react-scroll'


function Header() {
    // https://www.npmjs.com/package/use-dark-mode
    const darkMode = useDarkMode(false);

    //MOBILE - HAMBURGER BUTTON
    const [btn, setBtn] = React.useState(false);
    function btnHandler() {
        setBtn(newVal => !newVal)
    }
    // https://jonsuh.com/hamburgers/
    const btnClass = btn ? 
    "mobile-nav-toggle hamburger hamburger--spring is-active" : 
    "mobile-nav-toggle hamburger hamburger--spring";

    //MOBILE - TOGGLING SIDEBAR
    const toggleSideBar = btn ? 
    "nav__primary on flex"
    : 
    "nav__primary off flex";

    return(
        <header className="header flex">
            <Toggle checked={darkMode.value} onChange={darkMode.toggle}/>

            {/* MOBILE - HAMBURGER BUTTON */}
            <button onClick={btnHandler} className={btnClass} type="button"
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label="Menu" aria-controls="navigation" aria-expanded = {btn}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>

        {/* DESKTOP */}
        <nav className="nav">
            <ul id="navigation" className={toggleSideBar}>
                    {/* https://www.npmjs.com/package/react-scroll */}

                    <Link 
                        className="bar nav__home" 
                        activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={-80} 
                        duration={500}
                    >
                        HOME
                    </Link>
                
                    <Link 
                        className="bar nav__about" 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        ABOUT
                    </Link>
                
                    <Link 
                        className="bar nav__projects"
                        activeClass="active" 
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        PROJECTS
                    </Link>
                
                    <Link 
                        className="bar nav__contact" 
                        activeClass="active" 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-60} 
                        duration={500}
                    >
                        CONTACT
                    </Link>  
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
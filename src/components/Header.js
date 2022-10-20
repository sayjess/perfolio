/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import 'react-scroll';
import { Link } from 'react-scroll'


function Header() {


    const darkMode = useDarkMode(false);
    const [btn, setBtn] = React.useState(false);

    function btnHandler() {
        setBtn(newVal => !newVal)
    }

    const btnClass = btn ? "mobile-nav-toggle hamburger hamburger--spring is-active" : "mobile-nav-toggle hamburger hamburger--spring";

    const toggleSideBar = btn ? "nav__primary on flex": "nav__primary off flex";

    return(
        <header className="header flex">
            <Toggle checked={darkMode.value} onChange={darkMode.toggle}/>

            <button onClick={btnHandler} className={btnClass} type="button"
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label="Menu" aria-controls="navigation" aria-expanded = {btn}>
                <span className="hamburger-box">
                <span className="hamburger-inner"></span>
                </span>
            </button>

        <nav className="nav">
            <ul id="navigation" className={toggleSideBar}>
                
                    <Link className="bar nav__home" activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>HOME</Link>
                
                    <Link className="bar nav__about" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link>
                
                    <Link className="bar nav__projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
                
                    <Link className="bar nav__contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>CONTACT</Link>  
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
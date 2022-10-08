/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Container from 'react-bootstrap/Container';


function Header() {
    return(
        <header className="header">
            <button className="header__mode">Dark Mode</button>
            <nav className="header__nav">
                <a href="" className="header__nav__home">HOME</a>
                <a href="" className="header__nav__about">ABOUT</a>
                <a href="" className="header__nav__skills">SKILLS</a>
                <a href="" className="header__nav__projects">PROJECTS</a>
                <a href="" className="header__nav__contact">CONTACT</a>
            </nav>
        </header>
        
    )
}

export default Header;
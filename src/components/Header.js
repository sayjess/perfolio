/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';


function Header() {
    const darkMode = useDarkMode(false);
    const [btn, setBtn] = React.useState(false);
    const navAnimateFalse = {
        transform: "translateX(100%)",
        transition: "transform 350ms ease-in"
    }
    const navAnimateTrue = {
        transform: "translateX(0%)",
        transition: "transform 350ms ease-in"
    }

    function btnHandler() {
        setBtn(newVal => !newVal)
    }

    const btnClass = btn ? "mobile-nav-toggle hamburger hamburger--spring is-active" : "mobile-nav-toggle hamburger hamburger--spring";

    const toggleSideBar = btn ? "nav__primary on flex": "nav__primary off flex";

    // const mobileNavStyle = window.innerWidth < 560 ? navAnimateTrue : navAnimateFalse;



    //size
    // const windowSize = window.innerWidth <= 559 ? mobileNavStyle : console.log("large");
    // let mobileStyle
    // if(window.innerWidth <= 559 && btn){
    //     transform: "translateX(100%)",
    //     transition: "transform 350ms ease-in"
    // } else if (window.innerWidth <= 559 && !btn){
    //     navAnimateFalse
    // }
        
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
                    <li>
                        <a href="#" className="nav__home">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="nav__about">ABOUT</a>
                    </li>
                    <li> 
                        <a href="#" className="nav__skills">SKILLS</a>
                    </li>
                    <li>
                        <a href="#" className="nav__projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#" className="nav__contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
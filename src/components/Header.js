/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import 'react-scroll';
import { Link } from 'react-scroll'


function Header() {

    //SET BUTTON TO ACTIVE STYLING WHEN CLICKED
    

        function toggleButton(e) {
            const li = document.querySelectorAll('li');
            const a = document.querySelector('a');
            const target = e.target;
            console.log(target);

            // console.log("remove")
            // li.forEach(element => {
            //     element.classList.remove('active');
            //   });
            // //set on target
            // console.log("add")
            // target.classList.add("active");
            // a.forEach(element => {
            //     element.classList.remove('active');
            //   });

        }




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
                    <li>
                        <Link className="nav__home" activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>HOME</Link>
                    </li>
                    <li>
                        <Link className="nav__about" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT</Link>
                    </li>
                    <li>
                        <Link className="nav__projects" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link className="nav__contact" activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;
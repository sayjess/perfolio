/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typewriter from 'typewriter-effect';
import home from "../images/design/home.svg" ;


function Home(){
    const typewriter = () => {
    return <Typewriter
    onInit={(typewriter) => {
                typewriter.typeString("Frontend Web Developer")
                .pauseFor(5500)
                .deleteAll()
                .start();
            }}
    options={{
        autoStart: true,
        loop: true,
        }}
        />
    }
    return(
        <main name="home" className="home">
            <div className="home__desc"> 
                <h1 className="home__intro">
                    <div className="text">Hi, I'm Jess</div>
                    <div className="typewriter">{typewriter()}</div>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor. Nulla aliquet enim tortor at.
                </p>
                <div className="home__btn">
                    <a href={home} className="home__download" download>RESUME <i className="fa-solid fa-download"></i></a>
                    <a href="tel: +639271971915"
                    className="home__contact">CONTACT <i className="fa-solid fa-phone"></i></a>
                </div>
            </div>
            <div className="home__img">
                <img src={home} className="home__profile" alt="Sitting Girl on a Laptop"/>
            </div>
        </main>
    )
}

export default Home;
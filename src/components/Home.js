/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typewriter from 'typewriter-effect';
import home from "../images/design/home-img.png" ;


function Home(){
    const typewriter = () => {
    return <Typewriter
    onInit={(typewriter) => {
                typewriter.typeString("Aspiring Frontend Developer")
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
        <main className="home">
            <div className="home__img">
                <img src={home} className="home__profile" alt="jess's profile"/>
            </div>
            <div className="home__desc"> 
                <h1 className="home__intro">Hi, I'm Jess {typewriter()}</h1>
                <a href={home} className="home__download" download>RESUME</a>
                <a href=""
                className="home__contact">CONTACT </a>
            </div>
        </main>
    )
}

export default Home;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typewriter from 'typewriter-effect';
import resume from "../containers/resume.pdf" ;


function Home(){
    //https://www.npmjs.com/package/typewriter-effect
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
    
    //if user in mobile contact via mobile phone else contact via email
    const contactBtn = window.innerWidth < 427 ? "tel: 09271971915" : "mailto: elardojessj@gmail.com";
    
    return(
        <main className="home">
            <div className="home__desc"> 
                <h1 className="home__intro">
                    <div className="text">Hi, I'm Jess</div>
                    <div className="typewriter">{typewriter()}</div>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras semper auctor. Nulla aliquet enim tortor at.
                </p>
                <div 
                    className="home__btn"
                    >
                    <a 
                        href={resume} className="home__download" download
                        >
                        RESUME 
                            <i 
                                className="fa-solid fa-download"
                            ></i>
                    </a>
                    <a 
                        href={contactBtn}
                        className="home__contact"
                        >CONTACT 
                        <i 
                            className="fa-solid fa-phone">
                        </i>
                    </a>
                </div>
            </div>
            <div 
                className="home__img"
            >
                <img 
                    src={home} className="home__profile" 
                    alt=""
                />
            </div>
        </main>
    )
}

export default Home;
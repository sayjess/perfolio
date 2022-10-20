/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function About(){
    return(
        <div name="about" className="about">
            <h2 className="about--heading">Learn More About Me</h2>
            <div className="about--content">
                <div className="about--tech">
                    <h3>My Techstack</h3>
                    {/* maganda to set a card component para di repetitive */}
                    <p className='techstack flex'>
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-sass"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-npm"></i>
                    </p>
                </div>
                <p className="about--info">
                Hello, I am Jessa Marie Elardo. You can call me Jess for short! I am a Technical Architect by profession but a Front-end Developer by heart!
                <br></br>
                <br></br>
                I was always keen on having a career in Front-end Development and had already been taking online courses since pre-pandemic through DOST's free Coursera courses program. When the pandemic hit, I had to search for a job to support my family financially and had to stop my passion since then. Almost two years have passed ever since.
                <br></br>
                <br></br>
                In August of 2022, My passion in Front-end Development sparked again. Without a second though, I immediately bought ZTM's Web Development Course in Udemy. And it has taken me at this point looking back.
                <br></br>
                <br></br>
                I am excited by the thought that tomorrow, or in the coming days, I will finally be a Front-end Developer by profession!
                <br></br>
                <br></br>
                Fighting!
                {/* Being an Urban Planner by profession, I ventured on a mission to search for solutions to make smarter and more resilient communities – an endless quest for technological innovations which eventually led me to the fascinating world of Web Development.

                After all, the web is just an evolved form of the communities that we know. We connect, we communicate, we interact. Everything just turned digital.

                Today, my mission still remains, but I am more focused now on developing beautifully designed websites and web applications that foster seamless and worthwhile digital community experiences. Hungry to further enhance my knowledge in this field, I am open to working in environments where I can learn, grow, and contribute more. */}
                </p>
            </div>
        </div>
    )
}

export default About;
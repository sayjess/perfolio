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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod quis viverra nibh cras pulvinar mattis nunc. Convallis aenean et tortor at risus viverra adipiscing at in.
                <br></br>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat!
                <br></br>
                <br></br>
                Lorem!
                </p>
            </div>
        </div>
    )
}

export default About;
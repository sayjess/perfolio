import React from "react";

function Home(){
    return(
        <div className="home">
            <div className="home__wrapper_one">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="home__profile" alt="jess's profile"/>
            </div>
            <div className="home__wrapper__two">
                <h1 className="home__intro">Hi, I'm Jess, Frontend Web Developer</h1>
                <button className="home__download">Download CV</button>
                <button className="home__contact">Contact</button>
            </div>
        </div>
    )
}

export default Home;
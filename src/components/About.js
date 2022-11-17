/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import icon from "../containers/icon"
import Icon from "./Icon";


function About(){
    const icons = icon.map(data => {
        return <Icon    
            key={data.id} 
            data={data}
        />
      })

    return(
        <div className="about">
            <h2 
            className="about--heading"
            >
                Learn More About Me
            </h2>
            <div 
            className="about--content"
            >
                <div 
                className="about--tech"
                >
                    <h3>My Techstack</h3>
                    <div 
                    className='techstack flex'
                    >
                        {icons}
                    </div>
                </div>
                <p 
                className="about--info"
                >
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
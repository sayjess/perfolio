/* eslint-disable jsx-a11y/anchor-is-valid */
import img from '../images/small-proj/interactive-rating-component.png'
import React from 'react'

function OtherProjectsCard(props){
    //CARD HOVER STATE
    const [isHovering, setIsHovering] = React.useState(false)
    //STATE IS SET TO TRUE WHEN CURSOR HOVERS OUTSIDE CARD ELEMENT
    const hoverHandler = () => {
        setIsHovering(prevVal => !prevVal)
        console.log(isHovering)
        }
    //STATE IS SET TO FALSE WHEN CURSOR HOVERS OUTSIDE CARD ELEMENT
    const handleMouseOut = () => {
        setIsHovering(prevVal => !prevVal);
        };

    return(
        <section 
        className="card" 
        onMouseOver={hoverHandler} 
        onMouseOut={handleMouseOut}
        > 
            <img
            //HIDE IMAGE WHEN STATE IS TRUE ELSE DISPLAY
            className={isHovering ? 
            'card--img card--img--hidden' 
            : 
            'card--img card--img--show'} 
            src={ props.data.img}
             alt=""
             />
            <div 
            // SHOW ELEMENT WHEN STATE IS TRUE ELSE HIDE
            className={isHovering ?  
            'card--secondary card--secondary--show' 
            : 
            'card--secondary card--secondary--hidden'}>
                <p 
                className='card--desc'
                >
                    {props.data.description}
                </p>
                <div className='btn'>
                    <a 
                    href={props.data.github} 
                    className='btn btn--github'
                    rel="noreferrer" 
                    target="_blank"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a 
                    href={props.data.view} 
                    className='btn btn--view' 
                    rel="noreferrer" 
                    target="_blank"
                    >
                        <i className="fa-solid fa-eye"></i>
                    </a>
                </div>
            </div>
            <h2 
            className="card--title"
            >
                {props.data.name}
            </h2>
        </section>
    )
}

export default OtherProjectsCard;
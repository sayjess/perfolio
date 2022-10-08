/* eslint-disable jsx-a11y/anchor-is-valid */
import img from '../images/small-proj/interactive-rating-component.png'
import React from 'react'

function Card(props){
    const [isHovering, setIsHovering] = React.useState(false)
    const hoverHandler = () => {
        setIsHovering(prevVal => !prevVal)
        console.log(isHovering)
        }
    const handleMouseOut = () => {
        setIsHovering(prevVal => !prevVal);
        };

    return(
        <section className="card" onMouseOver={hoverHandler} onMouseOut={handleMouseOut}> 
            <img className={isHovering ? 'card--img card--img--hidden' : 'card--img card--img--show'} src={props.data.img} alt=""/>
            <div className={isHovering ?  'card--secondary card--secondary--show' : 'card--secondary card--secondary--hidden'}>
                <p className='card--desc'>
                    {props.data.description}
                </p>
                <div className='btn'>
                    <a href={props.data.github} className='btn btn--github'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href={props.data.view} className='btn btn--view'>
                        <i className="fa-solid fa-eye"></i>
                    </a>
                </div>
            </div>
            <h2 className="card--title">{props.data.name}</h2>
        </section>
    )
}

export default Card
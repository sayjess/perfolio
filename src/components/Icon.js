import React from 'react'


function Icon(props){
    return(
        <div className='icon-container'>
            <a href={props.data.link} target="_blank" rel="noreferrer">
                <i className={`icon  ${props.data.icon}`}></i>
            </a>
            <h3>{props.data.name}</h3>
        </div>
    )
}

export default Icon;
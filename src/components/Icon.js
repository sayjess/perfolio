import React from 'react'


function Icon(props){
    const {name, link, iconClassName, iconSVG } = props.data
    if(props.data.iconClassName)
    {
        return(
            <div className='icon-container'>
                <a href={link} target="_blank" rel="noreferrer">
                    <i className={`icon  ${iconClassName}`}></i>
                    
                </a>
                <h3>{name}</h3>
            </div>
        )
    }else if(iconSVG) {
        return(
            <div className='icon-container'>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={iconSVG} alt='' className='svg'/>
                    
                </a>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default Icon;
import React from "react";
function BigProjectsCard(props) {
    const { name, img, description, github, view, inProgress, techUsed } = props.data;
    const [hoverGear, onhoverGear] = React.useState(false);

    function onHoverGear () {
        onhoverGear(newVal => !newVal)
    }
    const gear = hoverGear ? 'techs on' : 'techs off';

    return(
        <div className="card">
            <div>
                <div className="card-content">
                    {!inProgress && 
                    <p className="status">
                    IN PROGRESS
                    </p>}
                    <img 
                    src={img} 
                    alt=""
                    />
                    <div className="tech-used">
                            <i className="fa-solid fa-gear gear" onMouseEnter={onHoverGear} onMouseLeave={onHoverGear}>
                            </i>
                        <div className="tech-wrapper">
                            <div className={gear}>
                                {techUsed}
                            </div>
                        </div>
                    </div>
                </div>
                <h2>
                    {name}
                </h2>
            </div>
                <p 
                className='card-desc'
                >
                    {description}
                </p> 
            <div 
            className='btn-container'
            >
                <a 
                href={github} 
                className='btn btn--github' 
                rel="noreferrer" target="_blank"
                >
                    <p>
                        SOURCE CODE
                    </p>
                    <i className="fa-brands fa-github"></i>
                </a>
                <a 
                href={view} 
                className='btn btn--view' 
                rel="noreferrer" 
                target="_blank"
                >
                    <p>
                        LIVE SITE
                    </p>
                    <i className="fa-solid fa-eye"></i>
                </a>
            </div>
        </div>
    )
}

export default BigProjectsCard;
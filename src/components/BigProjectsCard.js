import React from "react";
function BigProjectsCard(props) {
    const { name, img, description, github, view, inProgress, techUsed } = props.data;
    let [hoverGear, onHoverGear] = React.useState(false);
    console.log(hoverGear)

    function alternateHover () {
        onHoverGear(newVal => !newVal)
    }

    const outHoverGear = () => {
        onHoverGear(newVal => newVal = false)
    }

    const inHoverGear = () => {
        onHoverGear(newVal => newVal = true)
    }
    const gear = hoverGear ? 'techs on' : 'techs off';
    const gearClick = hoverGear ? 'fa-solid fa-gear gear gearClick' : "fa-solid fa-gear gear gearClickOut";

    return(
        <div className="card">
            <div>
                <div className="card-content">
                    {inProgress && 
                    <p className="status">
                    IN PROGRESS
                    </p>}
                    <img 
                    src={img} 
                    alt=""
                    />
                    <div className="tech-used">
                            <i className={gearClick} onMouseEnter={inHoverGear} onMouseLeave={outHoverGear} onClick={alternateHover}>
                            </i>
                        <div className="tech-wrapper">
                            <div className={gear}>
                            {
                                techUsed.map((tech) => {
                                    return (
                                        
                                        <i className={tech.name} key={tech.id}></i>
                                    )
                            })
                            }
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
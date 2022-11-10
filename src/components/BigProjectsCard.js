
function BigProjectsCard(props) {
    return(
        <div className="card">
            {!props.data.inProgress && <p className="status">
                IN PROGRESS
            </p>}
            <div>
                <img 
                src={props.data.img} 
                alt=""
                />
                <h2>
                    {props.data.name}
                </h2>
            </div>
                <p 
                className='card-desc'
                >
                    {props.data.description}
                </p> 
            <div 
            className='btn-container'
            >
                <a 
                href={props.data.github} 
                className='btn btn--github' 
                rel="noreferrer" target="_blank"
                >
                    <p>
                        SOURCE CODE
                    </p>
                    <i className="fa-brands fa-github"></i>
                </a>
                <a 
                href={props.data.view} 
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
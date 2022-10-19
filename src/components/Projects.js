import smallProj from '../containers/smallproj';
import CardSmallProj from "./OtherProjectsCard";
import CardBigProj from "./BigProjectsCard";
import bigProj from '../containers/bigproj';

function Projects(){
    const smallProjElement = smallProj.map(data => {
        return <CardSmallProj    
        key={data.key} 
        data={data}
        />
      })
      const bigProjElement = bigProj.map(data => {
        return <CardBigProj    
        key={data.key} 
        data={data}
        />
      })

    return(
      <section className='projects'>
        <div className='big-proj'>
          <h2>PROJECTS</h2>
          <h3>BIG PROJECTS</h3>
          <div className="container--big--proj">
            {bigProjElement}
          </div>
        </div>
        <div className='other-proj'>
          <h3 className='other-head'>OTHER PROJECTS</h3>
          <i class="fa-solid fa-caret-left"></i>
          <div className="container--small--proj">
            {smallProjElement}
          </div>
          <i class="fa-solid fa-caret-right"></i>
         </div>
      </section>
    )
}

export default Projects;
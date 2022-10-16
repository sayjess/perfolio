import smallProj from '../containers/smallproj';
import Card from "./Card";

function OtherProjects(){
    const smallProjElement = smallProj.map(data => {
        return <Card    
        key={data.key} 
        data={data}
        />
      })
    return(
      <section>
        <h2>OTHER PROJECTS</h2>
        <div className="container--small--proj">
          {smallProjElement}
        </div>
      </section>
    )
}

export default OtherProjects
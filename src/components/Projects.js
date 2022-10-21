import smallProj from '../containers/smallproj';
import CardSmallProj from "./OtherProjectsCard";
import CardBigProj from "./BigProjectsCard";
import bigProj from '../containers/bigproj';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects(){

  //multi-carousel library
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  const smallProjElement = smallProj.map(data => {
      return <CardSmallProj    
      key={data.id} 
      data={data}
      />
    })
    const bigProjElement = bigProj.map(data => {
      return <CardBigProj    
      key={data.id} 
      data={data}
      />
    })

  return(
    <section name='projects' className='projects'>
      <div className='big-proj'>
        <h2>PROJECTS</h2>
        <h3>BIG PROJECTS</h3>
        <div className="container--big--proj">
          {bigProjElement}
        </div>
      </div>
      <div className='other-proj'>
        <h3 className='other-head'>OTHER PROJECTS</h3>
        {/* <i className="fa-solid fa-caret-left"></i> */}
        <Carousel 
        swipeable={true}  
        keyBoardControl={true} 
        responsive={responsive} containerClass="carousel-container" 
        draggable={true}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px">
            {smallProjElement}
        </Carousel>
        {/* <i className="fa-solid fa-caret-right"></i> */}
        </div>
    </section>
  )
}

export default Projects;
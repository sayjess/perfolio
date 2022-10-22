import smallProj from '../containers/smallproj';
import CardSmallProj from "./OtherProjectsCard";
import CardBigProj from "./BigProjectsCard";
import bigProj from '../containers/bigproj';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects(){

  //https://www.npmjs.com/package/react-multi-carousel
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

  //src\containers\smallproj.js
  const smallProjElement = smallProj.map(data => {
      return <CardSmallProj    
      key={data.id} 
      data={data}
      />
    })
    // src\containers\bigproj.js
    const bigProjElement = bigProj.map(data => {
      return <CardBigProj    
      key={data.id} 
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
        <Carousel 
        swipeable={true}  
        keyBoardControl={true} 
        responsive={responsive} containerClass="carousel-container" 
        draggable={true}
        showDots={true}
        infinite={false}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px">
            {smallProjElement}
        </Carousel>
        </div>
    </section>
  )
}

export default Projects;
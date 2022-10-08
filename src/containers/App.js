import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Card from "../components/Card";
import smallProj from './smallproj';
import 'animate.css';



function App() {
  const smallProjElement = smallProj.map(data => {
    return <Card    
    key={data.key} 
    data={data}
    />
  })

  return (
    <div>  
        <Header />
        <Home />
        {/* <div className="container--small--proj">
          {smallProjElement}
        </div> */}
    </div>
  )
}

export default App;

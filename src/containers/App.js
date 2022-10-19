import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import 'animate.css';




function App() {
  

  return (
    <div>  
        <Header />
        <Home />
        <hr></hr>
        <About />
        <hr></hr>
        <Projects />
        <hr></hr>
        <Contact />
        <hr></hr>
        <Footer />
        <hr></hr>
    </div>
  )
}

export default App;

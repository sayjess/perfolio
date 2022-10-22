import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";




function App() {
  return (
    <div>  
        <Header />
        <Home name='home'/>
        <hr></hr>
        <About name='about'/>
        <hr></hr>
        <Projects name='projects'/>
        <hr></hr>
        <Contact name='contact'/>
        <hr></hr>
        <Footer />
        <hr></hr>
    </div>
  )
}

export default App;

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Certification from "./components/Certification/Certification";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";
const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certification/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;



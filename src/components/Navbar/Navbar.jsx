// import React from "react";
// import './Navbar.css'
// import logo from '../../assets/react.svg';
// import { motion } from 'framer-motion';


// const Navbar = ()=>{
//   return(
//   //   <motion.header
//   //   initial={{ opacity: 0, y: -50 }}
//   //   animate={{ opacity: 1, y: 1 }}
//   //   transition={{ duration: 0.5 }}
//   // >

//     <div id="Navbar" className='Navbar' >
//         <img src={logo} alt=""/> 
//         <ul className="nav-menu">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About Me</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#certifications">Certifications</a></li>
//         </ul>
         
//      <div onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="nav-connect">Connect With Me</div>
     
//     </div>
//     // </motion.header>
//   )
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Navbar">
         <div class="logo">
                <span>Portfolio.</span>
            </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
          <li className="nav-connect" onClick={handleScrollToContact}>Connect With Me</li>
        </ul>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;



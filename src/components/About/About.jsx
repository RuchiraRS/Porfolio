
// import React from "react";
// import "./About.css";
// import Me from '../../assets/Me.jpeg'

// const About = () => {
//   return (
//     <div id="about">
//        <section className="about">
//       <div className="about-container">
//         <img
//           src={Me}
//           alt="Profile"
//           className="about-image"
//         />
//         <div className="about-content">
//           <h1><span>About Me</span></h1>
//           <p>
//             Hi, I'm Ruchira Sonar, a passionate web developer specializing in the MERN stack. 
//             I love creating interactive and user-friendly applications. With experience in 
//             front-end and back-end development, I bring ideas to life through clean and 
//             efficient code.
//           </p>
//           <button className="about-btn">Download Resume</button>
//         </div>
//       </div>

//     </section>


//     </div>
   
//   );
// };

// export default About;


// 


import React from "react";
import "./About.css";
import Me from "../../assets/Me.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-card">
        <div className="about-image-wrapper">
          <img src={Me} alt="Profile" className="about-img" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-text">
            Hi! I'm <strong>Ruchira Sonar</strong>, a passionate developer
            working with the MERN stack to build full-stack web experiences.
            I’m a curious learner and creative problem-solver, eager to craft 
            meaningful digital solutions that are both beautiful and efficient.
          </p>
          <a href="/Ruchira_RS_Resume_Latest-1.pdf" className="download-btn" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

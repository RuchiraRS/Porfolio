// import React from "react";
// import "./Projects.css";

// const projects = [
//     {
//       title: "Vehicle Rental Management System",
//       description: "The Vehicle Rental Management System is a Java-based application designed to manage the rental process of vehicles efficiently.",
//       techStack: "Java, MySQL, Swing/JavaFX ",
//       link: "#",
//     },
//     {
//       title: "Virtual Bank Management System",
//       description: "The Virtual Bank Management System is a Java-based application designed to simulate banking operations, allowing users to manage their accounts digitally.",
//       techStack: "Java, MySQL, Swing/JavaFX",
//       link: "#",
//     },
//     {
//       title: "ATM Management System",
//       description: "Java-based application that simulates an Automated Teller Machine (ATM), allowing users to perform banking transactions",
//       techStack: "Java, MySQL, Swing/JavaFX",
//       link: "#",
//     },
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio website showcasing my skills and projects.",
//       techStack: "React, HTML & CSS",
//       link: "#",
//     },
//   ];


// const Projects = () => {
//   return (
//     <section id="projects" className="projects">
      
//       <h2 className="projects-title"><span>My Projects</span></h2>
//       <div className="projects-container">
//         {projects.map((project, index) =>  (
//            <div className="project-card" key={index}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
//             <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
//               View Project
//             </a>
//           </div>
// ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Vehicle Rental Management System",
    description: "The Vehicle Rental Management System is a Java-based application designed to manage the rental process of vehicles efficiently.",
    techStack: "Java, MySQL, Swing/JavaFX",
    link: "https://github.com/RuchiraRS/VehicleRentalSysytem_Java",
  },
  {
    title: "Virtual Bank Management System",
    description: "The Virtual Bank Management System is a Java-based application designed to simulate banking operations, allowing users to manage their accounts digitally.",
    techStack: "Java, MySQL, Swing/JavaFX",
    link: "https://github.com/RuchiraRS/Bank-Management-System-JAVA",
  },
  {
    title: "ATM Management System",
    description: "Python-based application that simulates an Automated Teller Machine (ATM), allowing users to perform banking transactions",
    techStack: "Python, MySQL",
    link: "https://github.com/RuchiraRS/Bankar_PythonProject",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio to showcase skills and projects.",
    techStack: "React, HTML, CSS",
    link: "#",
  },
  {
    title: "Stop Watch Application",
    description: "A simple and accurate stopwatch web application that allows users to start, pause, reset, and track elapsed time. Features include lap time recording and a clean, intuitive UI for time tracking purposes.",
    techStack: " React, HTML, CSS",
    link: "https://github.com/RuchiraRS/Stop_Watch",
  },
  {
    title: "Weather App",
    description: "A responsive web app that displays real-time weather (temperature, humidity, conditions) for any city using a weather API. Users can easily search global locations and view current updates.",
    techStack: "JavaScript, HTML, CSS, API",
    link: "https://github.com/RuchiraRS/Weather_App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title gradient-text">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.title}</h3>
                <p><strong>Tech:</strong> {project.techStack}</p>
              </div>
              <div className="card-back">
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

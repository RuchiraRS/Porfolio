import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-text-container">
        <motion.h1
          className="hero-heading"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="gradient-text">Hi, I'm Ruchira Sonar</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          MERN Stack Developer | Tech Explorer | Lifelong Learner
        </motion.p>

        <div className="hero-tags">
          {["ReactJS", "MongoDB", "Node.js", "Express", "UI/UX", "JavaScript"].map((tag, index) => (
            <motion.span
              key={index}
              className="hero-tag"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            >
              #{tag}
            </motion.span>
          ))}
        </div>

        <div className="hero-buttons">
          <div
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-connect"
          >
            Connect With Me
          </div>
          <a href="/Ruchira_RS_Resume_Latest-1.pdf" className="hero-resume" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

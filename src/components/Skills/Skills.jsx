/* Skills.jsx */
import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaJava, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const skillsData = [
  { title: 'HTML & CSS', level: 'Intermediate', icon: <FaHtml5 className="skill-icon" /> },
  { title: 'JavaScript', level: 'Intermediate', icon: <FaJsSquare className="skill-icon" /> },
  { title: 'Java', level: 'Intermediate', icon: <FaJava className="skill-icon" /> },
  { title: 'React', level: 'Intermediate', icon: <FaReact className="skill-icon" /> },
  { title: 'Node.js', level: 'Intermediate', icon: <FaNodeJs className="skill-icon" /> },
  { title: 'Express.js', level: 'Intermediate', icon: <SiExpress className="skill-icon" /> },
  { title: 'Python', level: 'Basic', icon: <FaPython className="skill-icon" /> },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title gradient-text">Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon-wrapper">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
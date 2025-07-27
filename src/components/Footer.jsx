import React from "react";
import './Footer.css';
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ruchira RS. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaGithub /></a>
          <a href="mailto:ruchirars05@gmail.com" className="footer-icon"><MdEmail /></a>
          <a href="www.linkedin.com/in/ruchira-rs-6a1807343" target="_blank" rel="noopener noreferrer" className="footer-icon"><FaLinkedin /></a>
          <a href="#home" className="footer-icon top-link"><FaArrowUp /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

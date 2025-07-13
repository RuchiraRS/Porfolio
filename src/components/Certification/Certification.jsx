import React from "react";
import "./Certification.css";
import Java from '../../assets/Java.png';
import Internship from '../../assets/Internship.png';

const certifications = [
  {
    id: 1,
    title: "Bootcamp on Java App Development",
    organization: "TechGits by DMCE",
    image: Java,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7308328643951276032/",
  },
  {
    id: 2,
    title: "Android Developer Virtual Internship",
    organization: "Google Developers",
    image: Internship,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7308326440104542208/",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="cert-title">My Certifications</h2>

      <div className="cert-grid">
        {certifications.map(cert => (
          <div className="cert-card-glow" key={cert.id}>
            <div className="cert-image-wrapper">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <span className="cert-badge">{cert.organization}</span>
            </div>
            <h3 className="cert-name">{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>

      <div className="linkedin-connect">
        <h3>Connect with me on LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/ruchira-rs-6a1807343/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Visit My LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Certification;

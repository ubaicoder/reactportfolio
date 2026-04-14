import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <footer className="footer">
      <div className="container text-center">

        {/* TITLE */}
        <h4 className="footer-title">Connect with Me</h4>

        {/* ICONS */}
        <div className="social-icons">

          <a href="mailto:ubairatangiri@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/ubai-ratangiri-b15b12225"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/ubai_ratangiri"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/ubaicoder"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

        </div>

        {/* RESUME BUTTON */}
        <a href="./resume.pdf" download className="resume-btn">
          Download Resume
        </a>

        {/* COPYRIGHT */}
        <p className="footer-text">
          © 2026 Ubai Ratangiri. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Contact;
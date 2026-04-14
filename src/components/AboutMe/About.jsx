import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container about-section">

      {/* TITLE */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h6 className="section-subtitle">Get to know me</h6>
        <h2 className="about-title">About Me</h2>
      </motion.div>

      {/* CONTENT CARD */}
      <div className="about-content">

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I am a passionate Frontend Developer who enjoys building clean,
          modern, and user-friendly web applications. I love turning ideas
          into real-world projects using <span>React</span>, <span>JavaScript</span>, 
          and modern UI practices.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I am continuously learning and improving my skills to stay updated
          with the latest technologies and trends in web development.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My goal is to become a full-stack developer and build impactful
          digital experiences.
        </motion.p>

      </div>

    </div>
  );
}

export default About;
import "./Skill.css";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiMysql, SiJavascript, SiHtml5 } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Skill() {
  return (
    <>
      <h2 className="text-center skill-title mt-5">Skills</h2>

      <div className="container">
        <div className="row g-4 mt-3">

          {/* Programming */}
          <motion.div
            className="col-lg-3 col-md-6 col-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="skill-card">
              <div className="skill-icon">
                <FaJava />
              </div>
              <h5>Programming</h5>
              <p>Java</p>
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            className="col-lg-3 col-md-6 col-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="skill-card">
              <div className="skill-icon">
                <SiHtml5 /> <FaCss3Alt /> <SiJavascript /> <FaReact />
              </div>
              <h5>Frontend</h5>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="col-lg-3 col-md-6 col-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="skill-card">
              <div className="skill-icon">
                <FaNodeJs />
              </div>
              <h5>Backend</h5>
              <p>Node.js, Express</p>
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            className="col-lg-3 col-md-6 col-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="skill-card">
              <div className="skill-icon">
                <SiMysql /> <SiMongodb />
              </div>
              <h5>Database</h5>
              <p>SQL, MongoDB (Intermediate)</p>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="col-lg-3 col-md-6 col-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="skill-card">
              <div className="skill-icon">
                <FaGitAlt /> <VscCode />
              </div>
              <h5>Tools</h5>
              <p>VS Code, IntelliJ, Git</p>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default Skill;
import "./Project.css";
import { motion } from "framer-motion";

function Project() {
  return (
    <>
      <h2 className="text-center project-title mt-5">Projects</h2>

      <div className="container">
        <div className="row g-4">
          {/* PROJECT 1 */}
          <motion.div
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-card">
              <img src="./banking.png" alt="" className="project-img" />

              <h4>💳 Banking Web App</h4>

              <p>
                Full-stack banking system with deposits, withdrawals and
                real-time transactions.
              </p>

              <div className="badges">
                <span>React</span>
                <span>Node</span>
                <span>Express</span>
                <span>MySQL</span>
              </div>

              <div className="btn-group">
                <a
                  href="https://frontend-nb.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a href="https://github.com/ubaicoder/frontend-nb" target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-card">
              <img src="./kicks.png" alt="" className="project-img" />

              <h4>👟 Kicks Store</h4>

              <p>
                React based e-commerce UI with cart, authentication and payment
                integration.
              </p>

              <div className="badges">
                <span>React</span>
                <span>Redux</span>
                <span>Bootstrap</span>
              </div>

              <div className="btn-group">
                <a
                  href="https://github.com/ubaicoder/kicks-shoep"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3 */}
          <motion.div
            className="col-lg-4 col-md-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="project-card">
              <img src="./dental.jpg" alt="" className="project-img" />

              <h4>🏥 Dental System</h4>

              <p>
                Django-based clinic system for appointment booking and patient
                management.
              </p>

              <div className="badges">
                <span>HTML</span>
                <span>CSS</span>
                <span>Django</span>
              </div>

              <div className="btn-group">
                <a
                  href="https://dentalclinicsystem.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a href="https://github.com/pawanti8421/DentalClinicManagement" target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Project;
